'use strict';
import { User } from '../../models/index.js';

const updateUser = async (req, res) => {
    const { userId } = req.params;
    const { name, phone, birthday } = req.body;
  
    // 로그인한 유저와 admin 이외에는 정보 수정 불가능하게
    if((userId === req.user.userId) || (userId === "admin")) {
      await User.updateOne(
        { userId },
        {
          name,
          phone,
          birthday,
        }
      );
      res.send("success /users/edit");
    } else {
      res.send("access denied /users/edit");
    }
}

export default updateUser;