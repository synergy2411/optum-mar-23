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

export default typeDefs;