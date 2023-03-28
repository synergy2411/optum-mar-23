import { GraphQLError } from 'graphql';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import UserModel from "../../model/user.model";

const SECRET_KEY = "MY_SUPER_SECRET";

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
    }
}

export { Mutation }

