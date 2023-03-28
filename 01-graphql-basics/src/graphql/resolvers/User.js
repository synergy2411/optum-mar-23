
const User = {
    posts: (parent, args, { db }) => {
        return db.posts.filter(post => post.author === parent.id)
    },
    comments: (parent, args, { db }) => db.comments.filter(comment => comment.creator === parent.id)
}

export { User }