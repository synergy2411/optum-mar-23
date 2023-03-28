
const typeDefs = /* GraphQL */ `
    type Query {
        hello: String!
    }
    type Mutation {
        registerUser(data: RegisterUserInput!): AuthPayload!
        loginUser(data: LoginUserInput!) : AuthPayload!
        createPost(data: CreatePostInput!) : Post!
    }
    input CreatePostInput {
        title: String!
        body: String!
    }
    type Post {
        id: ID!
        title: String!
        body: String!
    }

    input LoginUserInput{ 
        email: String!
        password: String!
    }
    type AuthPayload{
        token: String!
        email: String!
    }
    input RegisterUserInput {
        email: String!
        password: String!
        age: Int!
    }
`

export default typeDefs;