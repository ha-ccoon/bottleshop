/*
'use strict';
import { User } from '../models/index.js';
//import jwt from "jsonwebtoken"; // "npm i jsonwebtoken" 설치 필요

const getLogout = async (req, res, next) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err)    
  })
};

export { getUser };
*/