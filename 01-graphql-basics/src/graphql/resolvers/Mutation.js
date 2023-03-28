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
    }
}

export { Mutation }