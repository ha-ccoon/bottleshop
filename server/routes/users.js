'use strict';
import express from 'express';
const router = express.Router();

import { getUser } from '../controller/userController.js';

/* user 정보 가져오기 */
router.get('/', getUser);

export default router;
