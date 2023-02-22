'use strict';
import express from 'express';
const router = express.Router();

import postProduct from '../controller/productController.js';
import postOrder from '../controller/orderController.js';
import postShipment from '../controller/shipmentController.js';
import { Product } from '../models/index.js';

// http://localhost:8080
router.get('/', (req, res) => {
  res.render('index');
});

// http://localhost:8080/product
router.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});



router.post('/products', postProduct);

// http://localhost:8080/order
router.get('/orders', async (req, res) => {
  res.json(req.body);
});

router.post('/orders', postOrder);

// http://localhost:8080/shipment
router.get('/shipments', (req, res) => {
  res.json(req.body);
});

router.post('/shipments', postShipment);

export default router;
