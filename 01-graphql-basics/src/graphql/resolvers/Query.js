import db from '../../model/db';
const Query = {
    users: (parent, args) => {
        const { name, sort } = args;
        let duplicateUsers = [];
        if (name) {
            duplicateUsers = db.users.filter(user => user.name.includes(name))
        }

        if (sort) {
            const usersOne = duplicateUsers.length > 0 ? duplicateUsers : db.users;
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
        return db.users
    },
    posts: (parent) => db.posts,
    comments: (parent) => db.comments
}

export { Query }