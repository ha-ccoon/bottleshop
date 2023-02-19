'use strict';
import express from 'express';
const router = express.Router();

import { postProduct } from '../controller/productController.js';

// http://localhost:8080
router.get('/', (req, res) => {
  res.render('index');
});

// http://localhost:8080/product
router.get('/product', (req, res) => {
  res.render('product');
});

router.post('/product', postProduct);

export default router;
