import { v4 } from 'uuid';
import db from '../../model/db';
const Mutation = {
    createUser: (_, { data }) => {
        const { name, age } = data;
        let newUser = {
            id: v4(),
            name,
            age
        }
        db.users.push(newUser);
        return newUser;
    }
}

export { Mutation }