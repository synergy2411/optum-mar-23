import db from '../../model/db';
const Post = {
    author: (parent) => {
        return db.users.find(user => user.id === parent.author)
    },
    comments: (parent) => db.comments.filter(comment => comment.postId === parent.id)
}

export { Post }