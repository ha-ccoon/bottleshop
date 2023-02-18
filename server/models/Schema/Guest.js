'use strict';
import { Schema } from 'mongoose';

const GuestSchema = new Schema({
    _id: Schema.Types.ObjectId,
    order_id: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    }
},
{
      timestamps: true,
});
  
export default GuestSchema;
