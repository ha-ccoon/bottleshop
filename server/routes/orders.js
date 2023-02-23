'use strict';
import express from 'express';
const router = express.Router();

import { Order } from '../models/index.js';
import postOrder from '../controller/orders/postOrder.js';

// http://localhost:8080/order (주문 목록 반환)
router.get('/', async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
});

// http://localhost:8080/order (주문 추가)
router.post('/', postOrder);

// http://localhost:8080/order (주문 수정)

export default router;
