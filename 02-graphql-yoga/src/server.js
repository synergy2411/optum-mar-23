import express from 'express';
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';

const app = express()

const typeDefs = /* GraphQL */ `
    type Query {
        hello: String!
    }
`
const resolvers = {
    Query: {
        hello: () => "World"
    }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })


const yoga = createYoga({
    schema
})

app.use("/graphql", yoga)

app.listen(4001, () => console.log("Server running on PORT : 4001"))