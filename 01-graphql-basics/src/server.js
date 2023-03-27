import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

let users = [
    { id: "u001", name: "john", age: 32 },
    { id: "u002", name: "jenny", age: 34 },
    { id: "u003", name: "james", age: 35 },
]

let posts = [
    { id: "p001", title: "GraphQL for Beginners", body: "Awesome post", published: true },
    { id: "p002", title: "GraphQL 101", body: "Like it", published: false },
    { id: "p003", title: "Mastering GraphQL", body: "Love it ♥", published: true },
    { id: "p004", title: "GraphQL - All-in-one", body: "Not that great", published: false },
]

const typeDefs = `
    type Query {
        users : [User!]!
        posts: [Post!]!
    }
    type Post {
        id: ID!
        title: String!
        body: String!
        published : Boolean!
    }
    type User {
        id : ID!
        name: String!
        age: Int!
    }
`

const resolvers = {
    Query: {
        users: () => users,
        posts: () => posts
    }
}

const server = new ApolloServer({
    typeDefs,           // structure
    resolvers           // behaviour
})

startStandaloneServer(server)
    .then(({ url }) => console.log("GraphqL Server is running at " + url))
    .catch(console.error)