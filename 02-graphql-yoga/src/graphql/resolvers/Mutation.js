import { GraphQLError } from 'graphql';
import { hash, compare } from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';

import PostModel from '../../model/post.model';
import UserModel from "../../model/user.model";

import { config } from 'dotenv';

config();

const { SECRET_KEY } = process.env;


const Mutation = {
    registerUser: async (parent, args, context) => {
        try {
            const { email, password, age } = args.data;
            const hashPassword = await hash(password, 12)
            const newUser = new UserModel({ email, password: hashPassword, age })
            const createdUser = await newUser.save()
            const token = sign({ id: createdUser._doc._id }, SECRET_KEY)
            return { email, token }
        } catch (err) {
            console.log(err)
            throw new GraphQLError("Unable to created user " + err.message)
        }
    },
    loginUser: async (_, args, context) => {
        try {
            const { email, password } = args.data;
            const userFound = await UserModel.findOne({ email })
            if (!userFound) {
                throw new GraphQLError("Unable to find email - " + email)
            }

            const isMatch = await compare(password, userFound._doc.password)

            if (!isMatch) {
                throw new GraphQLError("Bad Credentials")
            }

            const token = sign({ id: userFound._doc._id }, SECRET_KEY)
            return { token, email }

        } catch (err) {
            throw new GraphQLError(err.message)
        }
    },
    createPost: async (_, args, { token, pubsub }) => {
        if (!token) {
            throw new GraphQLError("Auth required")
        }
        try {
            const { title, body } = args.data;
            const { id } = verify(token, SECRET_KEY)
            const newPost = new PostModel({ title, body, author: id });
            const createdPost = await newPost.save()

            pubsub.publish("POST_CHANNEL", {
                postSub: {
                    message: "CREATED",
                    post: createdPost
                }
            })

            return { id: createdPost._doc._id, ...createdPost._doc }
        } catch (err) {
            throw new GraphQLError(err.message)
        }
    }
}

export { Mutation }

