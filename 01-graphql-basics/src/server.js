import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { v4 } from 'uuid';

let users = [
    { id: "u001", name: "john", age: 32, },
    { id: "u002", name: "jenny", age: 34 },
    { id: "u003", name: "james", age: 35 },
]

let posts = [
    { id: "p001", title: "GraphQL for Beginners", body: "Awesome post", published: true, author: "u001" },
    { id: "p002", title: "GraphQL 101", body: "Like it", published: false, author: "u002" },
    { id: "p003", title: "Mastering GraphQL", body: "Love it ♥", published: true, author: "u003" },
    { id: "p004", title: "GraphQL - All-in-one", body: "Not that great", published: false, author: "u001" },
]

let comments = [
    { id: "c001", text: "Awesome blog", postId: "p001", creator: "u003" },
    { id: "c002", text: "Great blog", postId: "p002", creator: "u001" },
    { id: "c003", text: "Not so great blog", postId: "p003", creator: "u003" },
    { id: "c004", text: "Just like that", postId: "p002", creator: "u001" },
]

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

const resolvers = {
    Mutation: {
        createUser: (_, args) => {
            const { name, age } = args.data;
            let newUser = {
                id: v4(),
                name,
                age
            }
            users.push(newUser);
            return newUser;
        }
    },
    Query: {
        users: (parent, args) => {
            const { name, sort } = args;
            let duplicateUsers = [];
            if (name) {
                duplicateUsers = users.filter(user => user.name.includes(name))
            }

            if (sort) {
                const usersOne = duplicateUsers.length > 0 ? duplicateUsers : users;
                return usersOne.sort((a, b) => {
                    if (a[sort] > b[sort]) {
                        return 1
                    } else if (a[sort] < b[sort]) {
                        return -1
                    }
                    else {
                        return 0
                    }
                })
            }
            return users
        },
        posts: (parent) => posts,
        comments: (parent) => comments
    },
    Post: {
        author: (parent) => {
            return users.find(user => user.id === parent.author)
        },
        comments: (parent) => comments.filter(comment => comment.postId === parent.id)
    },
    User: {
        posts: (parent) => {
            return posts.filter(post => post.author === parent.id)
        },
        comments: parent => comments.filter(comment => comment.creator === parent.id)
    },
    Comment: {
        post: (parent) => posts.find(post => post.id === parent.postId),
        creator: (parent) => users.find(user => user.id === parent.creator)
    }
}

const server = new ApolloServer({
    typeDefs,           // structure
    resolvers           // behaviour
})

startStandaloneServer(server)
    .then(({ url }) => console.log("GraphqL Server is running at " + url))
    .catch(console.error)