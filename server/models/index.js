// 스키마 모델화
'use strict';
import mongoose from 'mongoose';
import UserSchema from './Schema/User';
import GuestSchema from './Schema/Guest';
import PostSchema from './Schema/Post';
import CommentSchema from './Schema/Comment';

const User = mongoose.model('User', UserSchema, "UserList");
const Guest = mongoose.model('Guest', GuestSchema, "GuestList");
const Post = mongoose.model('Post', PostSchema, "PostList");
const Comment = mongoose.model('Comment', CommentSchema, "CommentList");

export { User, Guest, Post, Comment, };