// 스키마 모델화
'use strict';
import mongoose from 'mongoose';

import UserSchema from './Schema/User';
import GuestSchema from './Schema/Guest';
import PostSchema from './Schema/Post';
import CommentSchema from './Schema/Comment';
import OrderSchema from './Schema/Order';
import ProductSchema from './Schema/Product';
import ShipmentSchema from './Schema/Shipment';

const User = mongoose.model('User', UserSchema, "UserList");
const Guest = mongoose.model('Guest', GuestSchema, "GuestList");
const Post = mongoose.model('Post', PostSchema, "PostList");
const Comment = mongoose.model('Comment', CommentSchema, "CommentList");
const Order = mongoose.model('Order', OrderSchema, 'OrderList');
const Product = mongoose.model('Product', ProductSchema, 'ProductList');
const Shipment = mongoose.model('Shipment', ShipmentSchema, 'ShipmentList');

export { User, Guest, Post, Comment, Order, Product, Shipment };

