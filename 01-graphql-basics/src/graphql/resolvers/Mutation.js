import { v4 } from 'uuid';

const Mutation = {
    createUser: (_, { data }, context) => {
        const { name, age } = data;
        let newUser = {
            id: v4(),
            name,
            age
        }
        context.db.users.push(newUser);
        return newUser;
    }
}

export { Mutation }