
const typeDefs = /* GraphQL */ `
    type Query {
        hello: String!
    }
    type Mutation {
        registerUser(data: RegisterUserInput!): AuthPayload!
    }
    type AuthPayload{
        message: String!
        email: String!
    }
    input RegisterUserInput {
        email: String!
        password: String!
        age: Int!
    }
`

export default typeDefs;