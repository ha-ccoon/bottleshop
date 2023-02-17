import { Schema } from 'mongoose';

const PostSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
        default: '작성자',
    },
    comment: [CommentSchema],
}, {
      timestamps: true,
});
  
export { PostSchema };