import { GraphQLError } from 'graphql';

import UserModel from "../../model/user.model";

const Mutation = {
    registerUser: async (parent, args, context) => {
        try {
            const { email, password, age } = args.data;
            const newUser = new UserModel({ email, password, age })
            const createdUser = await newUser.save()
            console.log("CREATED USER ", createdUser);
            return { message: "CREATED", email }
        } catch (err) {
            throw new GraphQLError("Unable to created user " + err.message)
        }
    }
}

export { Mutation }