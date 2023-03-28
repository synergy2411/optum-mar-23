import { v4 } from 'uuid';
import { GraphQLError } from 'graphql'

const Mutation = {
    createUser: (_, { data }, { db }) => {
        const { name, age } = data;
        let newUser = {
            id: v4(),
            name,
            age
        }
        db.users.push(newUser);
        return newUser;
    },
    updateUser: (_, { userId, age }, { db }) => {
        const position = db.users.findIndex(user => user.id === userId)
        if (position >= 0) {
            db.users[position].age = age;
            return db.users[position]
        }
        throw new GraphQLError("Unable to locate user for ID - " + userId)
    },
    deleteUser: (_, { userId }, { db }) => {
        const position = db.users.findIndex(user => user.id === userId)
        if (position >= 0) {
            const [deletedUser] = db.users.splice(position, 1)
            return deletedUser;
        }
        throw new GraphQLError("Unable to locate user for ID - " + userId)
    },
    createPost: (_, { authorId, data }, { db }) => {
        const position = db.users.findIndex(user => user.id === authorId)
        if (position >= 0) {
            const newPost = {
                id: v4(),
                title: data.title,
                body: data.body,
                published: false,
                author: authorId
            }
            db.posts.push(newPost);
            return newPost;
        }
        throw new GraphQLError("Unable to locate user for ID - " + userId)
    },
    createComment: (_, { text, creator, postId }, { db }) => {
        const userPosition = db.users.findIndex(user => user.id === creator)
        if (userPosition === -1) {
            throw new GraphQLError("Unable to locate the user ID - " + creator)
        }
        const postPosition = db.posts.findIndex(post => post.id === postId)
        if (postPosition === -1) {
            throw new GraphQLError("Unable to locate the Post ID - " + postId)
        }

        let newComment = {
            id: v4(),
            text,
            creator,
            postId
        }

        db.comments.push(newComment);
        return newComment;
    }
}

export { Mutation }