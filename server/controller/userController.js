'use strict';
import { User } from '../models/index.js';

const getUser = async (req, res, next) => {
  const {
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
      const adminValue = false;
      
      if(emailId === "admin") {
        adminValue = true;
        console.log("getADMIN");
      }
      const userInfo = await User.create({
        isAdmin:adminValue,
        emailId,
        domain,
        password,
        name,
        phone,
        birthday,
        auth_email,
      });
      userInfo.save();

      console.log('It has been uploaded "USER" in the system');
      res.send('success "USRE"');
    } 
  } catch (e) {
    console.log(e.message);
  }
};

export default getUser;
