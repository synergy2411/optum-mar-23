
const Comment = {
    post: (parent, args, { db }) => db.posts.find(post => post.id === parent.postId),
    creator: (parent, args, { db }) => db.users.find(user => user.id === parent.creator)
}

export { Comment }