'use strict';
import express from 'express';
const router = express.Router();

import { Product } from '../models/index.js';
import postProduct from '../controller/products/postProduct.js';

// http://localhost:8080/products
// 상품 목록 반환
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// 상품 추가
router.post('/', postProduct);

// 상품 수정
router.post('/:shortId', updateProduct);

export default router;
