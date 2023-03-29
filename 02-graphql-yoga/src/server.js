import express from 'express';
import { createYoga, createPubSub } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import "./db"

const app = express()
const PORT = process.env.PORT || 4001;
const schema = makeExecutableSchema({ typeDefs, resolvers })

const pubsub = createPubSub();

const yoga = createYoga({
    schema,
    context: ({ req, res }) => {
        const authHeader = req.headers["authorization"]                // "Bearer tokenValue"
        let token = null;
        if (authHeader) {
            token = authHeader.split(" ")[1]            //["Bearer", "tokenValue"]
        }
        return {
            token, pubsub
        }
    }
})

app.use("/graphql", yoga)

app.listen(PORT, () => console.log("Server running on PORT :" + PORT))

// http://localhost:4001/graphql