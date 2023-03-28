import express from 'express';
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import "./db"

const app = express()

const schema = makeExecutableSchema({ typeDefs, resolvers })

const yoga = createYoga({
    schema,
    context: ({ req, res }) => {
        const authHeader = req.headers["authorization"]                // "Bearer tokenValue"
        let token = null;
        if (authHeader) {
            token = authHeader.split(" ")[1]            //["Bearer", "tokenValue"]
        }
        return {
            token
        }
    }
})

app.use("/graphql", yoga)

app.listen(4001, () => console.log("Server running on PORT : 4001"))

// http://localhost:4001/graphql