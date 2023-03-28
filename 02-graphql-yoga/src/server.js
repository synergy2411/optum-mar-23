import express from 'express';
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const app = express()

const schema = makeExecutableSchema({ typeDefs, resolvers })

const yoga = createYoga({
    schema
})

app.use("/graphql", yoga)

app.listen(4001, () => console.log("Server running on PORT : 4001"))

// http://localhost:4001/graphql