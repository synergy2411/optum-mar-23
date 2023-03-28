import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { v4 } from 'uuid';
import db from './model/db';


const typeDefs = /* GraphQL */`
    type Query {
        users(name: String, sort: String) : [User!]!
        posts: [Post!]!
        comments: [Comment!]!
    }
    type Mutation {
        createUser(data: CreateUserInput) : User!
    }
    input CreateUserInput {
        name: String!
        age: Int!
    }
    type Comment {
        id: ID!
        text: String!
        post: Post!
        creator: User!
    }
    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment!]!
    }
    type User {
        id: ID!
        name: String!
        age: Int!
        posts: [Post!]!
        comments: [Comment!]!
    }
`

const resolvers = {
    Mutation: {
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
    },
    Query: {
        users: (parent, args) => {
            const { name, sort } = args;
            let duplicateUsers = [];
            if (name) {
                duplicateUsers = db.users.filter(user => user.name.includes(name))
            }

            if (sort) {
                const usersOne = duplicateUsers.length > 0 ? duplicateUsers : db.users;
                return usersOne.sort((a, b) => {
                    if (a[sort] > b[sort]) {
                        return 1
                    } else if (a[sort] < b[sort]) {
                        return -1
                    }
                    else {
                        return 0
                    }
                })
            }
            return db.users
        },
        posts: (parent) => db.posts,
        comments: (parent) => db.comments
    },
    Post: {
        author: (parent) => {
            return db.users.find(user => user.id === parent.author)
        },
        comments: (parent) => db.comments.filter(comment => comment.postId === parent.id)
    },
    User: {
        posts: (parent) => {
            return db.posts.filter(post => post.author === parent.id)
        },
        comments: parent => db.comments.filter(comment => comment.creator === parent.id)
    },
    Comment: {
        post: (parent) => db.posts.find(post => post.id === parent.postId),
        creator: (parent) => db.users.find(user => user.id === parent.creator)
    }
}

const server = new ApolloServer({
    typeDefs,           // structure
    resolvers,           // behaviour

})

startStandaloneServer(server)
    .then(({ url }) => console.log("GraphqL Server is running at " + url))
    .catch(console.error)