import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './model/db';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers'

const server = new ApolloServer({
    typeDefs,           // structure
    resolvers,           // behaviour
})

startStandaloneServer(server, {
    context: () => {
        return {
            db
        }
    }
})
    .then(({ url }) => console.log("GraphqL Server is running at " + url))
    .catch(console.error)