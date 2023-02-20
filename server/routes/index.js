'use strict';
import express from 'express';
const router = express.Router();

import postProduct from '../controller/productController.js';
import postOrder from '../controller/orderController.js';
import postShipment from '../controller/shipmentController.js';

// http://localhost:8080
router.get('/', (req, res) => {
  res.render('index');
});

// http://localhost:8080/product
router.get('/product', (req, res) => {
  res.render('success');
});

router.post('/product', postProduct);

// http://localhost:8080/order
router.get('/order', (req, res) => {
  res.render('order');
});

router.post('/order', postOrder);

// http://localhost:8080/shipment
router.get('/shipment', (req, res) => {
  res.render('shipment');
});

router.post('/shipment', postShipment);

export default router;
