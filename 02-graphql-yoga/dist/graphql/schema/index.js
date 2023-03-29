"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var typeDefs = /* GraphQL */"\n    type Query {\n        hello: String!\n        posts: [Post!]!\n    }\n    type Mutation {\n        registerUser(data: RegisterUserInput!): AuthPayload!\n        loginUser(data: LoginUserInput!) : AuthPayload!\n        createPost(data: CreatePostInput!) : Post!\n        deletePost(postId: ID!) : Post!\n    }\n    type Subscription {\n        count: Int!\n        postSub: PostSubscriptionPayload! \n    }\n    type PostSubscriptionPayload {\n        message: PostMessageSubscription!\n        post: Post!\n    }\n    enum PostMessageSubscription{\n        CREATED\n        DELETED\n        UPDATED\n    }\n    input CreatePostInput {\n        title: String!\n        body: String!\n    }\n    type Post {\n        id: ID!\n        title: String!\n        body: String!\n    }\n\n    input LoginUserInput{ \n        email: String!\n        password: String!\n    }\n    type AuthPayload{\n        token: String!\n        email: String!\n    }\n    input RegisterUserInput {\n        email: String!\n        password: String!\n        age: Int!\n    }\n";
var _default = typeDefs;
exports["default"] = _default;
//# sourceMappingURL=index.js.map