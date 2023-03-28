import { GraphQLError } from 'graphql';
import { hash } from 'bcrypt';

import UserModel from "../../model/user.model";

const Mutation = {
    registerUser: async (parent, args, context) => {
        try {
            const { email, password, age } = args.data;
            const hashPassword = await hash(password, 12)
            const newUser = new UserModel({ email, password: hashPassword, age })
            const createdUser = await newUser.save()
            console.log("CREATED USER ", createdUser);
            return { message: "CREATED", email }
        } catch (err) {
            console.log(err)
            throw new GraphQLError("Unable to created user " + err.message)
        }
    }
}

export { Mutation }

