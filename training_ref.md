- Tea : 11:45 (15 minutes)
- Lunch : 1:30 (45 minutes)
- Tea : 4:00 (15 minutes)

# Node Installer -

- Node Native modules (eg. http, path, event, fs etc)
- Node Package Manager (NPM)
- Node Runtime Environment (NRE)

# REST API

- /books GET -> id, isbn, title, numOfPages, author etc

isbn, title, author

- /authors -> id name, email, bookId

- /books -> id, isbn, title, numOfPages, author etc

# GraphQL

<!-- Client -->

query {
hello
}

query {
author{ name books { title } }
}

<!-- OUTPUT  -->

data : {
author : {
name : "john doe",
books: [
{title : "xyz"}
]
}
}

- Authors : /authors

- Books : /books

/authors/xyz/books

# Schema contains types and their resolvers

- Various Query Types

  > Query

        : Scalar Type : ID Int String Boolean Float
        : Complex Type : Product User Employee Post Comment

  > Mutation
  > Subscription

- Resolvers : function to resolve the query (query, mutation, subs)

# GraphQL

- Single Endpoint
- No over/under-fetching
- Scalar types
- Schema
  > typeDefs
  > resolvers
- Query Types (Query, Mutation, Subscription)

# geenrate package.json file

    > npm init -y

# babel dependencies -> traspiles latest javascript into older JS code

    > npm i @babel/core @babel/cli @babel/node @babel/preset-env -D

# nodemon -> automatically restart node server, whenever the file is saved

    > npm i nodemon -D
    > npm run start:dev

# GraphQL Dependencies

    > npm i graphql
    > npm i @apollo/server
    > npm i graphql-yoga @graphql-tools/schema

# Express Middleware

    > npm i express

ES6 / 2015 / ES2015 -> destructuring, arrow function, template syntax, rest / spread etc
2016
2017
2018
2020
2021
2022

"CommonJS Module" system - by default in Node
"ESM Module" System - latest module system

> npm run start:dev

Mutation
signUp / register -> email, password, age -> Mongo DB -> Generate JWT Token -> Send JWT to client

signIn / login -> email, password -> verify user from DB -> generate JWT -> Send JWT to client

posts (Protected resource) -> need to attach JWT Token to access protected resource
