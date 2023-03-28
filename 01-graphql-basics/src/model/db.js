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

export default { users, posts, comments };

// u001 -> p001 p004 c004 c002 c001
// u002 -> p002 c002 c004