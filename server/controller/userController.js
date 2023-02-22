'use strict';
import { User } from '../models/index.js';
//import jwt from "jsonwebtoken"; // "npm i jsonwebtoken" 설치 필요

const getUser = async (req, res, next) => {
  const {
    isAdmin,
    emailId,
    domain,
    password,
    name,
    phone,
    birthday,
    auth_email,
  } = req.body;
  
  try {
    const user = await User.findOne({ emailId });
    
    if(user) {  // 이메일 중복 확인
      console.log('"' + emailId + '" already exists');
      res.send('User already exists');
    }

    else {
      if(emailId === "admin") {
        const userInfo = await User.create({
          isAdmin:true,
          emailId,
          domain,
          password,
          name,
          phone,
          birthday,
          auth_email,
        });
        userInfo.save();
        //console.log("userController.js 44" + userInfo.id);

        console.log('It has been uploaded "USER-ADMIN" in the system');
        res.send('success "ADMIN"');
      }

      else {
        const userInfo = await User.create({
          isAdmin:false,
          emailId,
          domain,
          password,
          name,
          phone,
          birthday,
          auth_email,
        });
        userInfo.save();
        //console.log("userController.js 44" + userInfo.id);

        console.log('It has been uploaded "USER" in the system');
        res.send('success "USER"');
      }
    }
    
  } catch (e) {
    console.log(e.message);
  }
};


export { getUser };
