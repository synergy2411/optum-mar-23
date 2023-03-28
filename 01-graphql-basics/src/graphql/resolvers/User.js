import db from '../../model/db';
const User = {
    posts: (parent) => {
        return db.posts.filter(post => post.author === parent.id)
    },
    comments: parent => db.comments.filter(comment => comment.creator === parent.id)
}

export { User }