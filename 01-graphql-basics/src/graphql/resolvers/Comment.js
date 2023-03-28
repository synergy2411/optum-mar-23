import db from '../../model/db';
const Comment = {
    post: (parent) => db.posts.find(post => post.id === parent.postId),
    creator: (parent) => db.users.find(user => user.id === parent.creator)
}

export { Comment }