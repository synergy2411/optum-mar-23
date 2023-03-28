import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true
    },
    body: {
        type: Schema.Types.String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

const PostModel = model("Post", postSchema)

export default PostModel;
