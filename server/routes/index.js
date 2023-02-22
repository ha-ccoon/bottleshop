'use strict';
import express from 'express';
const router = express.Router();

import productsRouter from './products.js';
import ordersRouter from './orders.js';
import shipmentsRouter from './shipments.js';

// http://localhost:8080
router.get('/', (req, res) => {
  res.render('index');
});

router.use('/products', productsRouter);
router.use('/orders', ordersRouter);
router.use('/shipments', shipmentsRouter);

export default router;
