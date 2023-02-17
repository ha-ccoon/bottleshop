import { Schema } from 'mongoose';

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    auth_email: {
        Boolean: false,
        required: true,
    },
    birthday: Date,
  }, {
    timestamps: true,
});
  
export default UserSchema;