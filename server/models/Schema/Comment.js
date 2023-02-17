import { Schema } from 'mongoose';

const CommentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    content: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
        default: '관리자',
    },
},
{
      timestamps: true,
});
  
export default CommentSchema;
