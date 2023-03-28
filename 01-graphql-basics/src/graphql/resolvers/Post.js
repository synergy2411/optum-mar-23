
const Post = {
    author: (parent, args, { db }) => {
        return db.users.find(user => user.id === parent.author)
    },
    comments: (parent, args, { db }) => db.comments.filter(comment => comment.postId === parent.id)
}

export { Post }