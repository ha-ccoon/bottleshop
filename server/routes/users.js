const express = require('express');
const router = express.Router();
import { getUser } from '../controller/userController';

/* user 정보 가져오기 */
router.get('/', getUser);

module.exports = router;
