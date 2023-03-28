import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: Schema.Types.String,
        required: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    age: {
        type: Schema.Types.Number,
        required: true
    }
}, { versionKey: false })

const UserModel = model("User", userSchema)

export default UserModel;
