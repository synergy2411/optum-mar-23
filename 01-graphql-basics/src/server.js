import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
    type Query {
        hello : String
    }
`

const resolvers = {
    Query: {
        hello: () => "World"
    }
}

const server = new ApolloServer({
    typeDefs,           // structure
    resolvers           // behaviour
})

startStandaloneServer(server)
    .then(({ url }) => console.log("GraphqL Server is running at " + url))
    .catch(console.error)