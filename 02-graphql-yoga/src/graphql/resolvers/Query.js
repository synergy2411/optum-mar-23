import PostModel from "../../model/post.model"
import { GraphQLError } from 'graphql'

const Query = {
    hello: () => "World",
    posts: async () => {
        try {
            const allPost = await PostModel.find()
            return allPost;
        } catch (err) {
            throw new GraphQLError(err.message)
        }
    }
}

export { Query }