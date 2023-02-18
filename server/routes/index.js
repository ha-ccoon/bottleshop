'use strict';
import express from 'express';
const router = express.Router();

// http://localhost:8080
router.get('/', (req, res) => {
  res.render('index');
});

// http://localhost:8080/product
const productList = [
  {
    id: 1,
    name: 'soju',
    wine: true,
  },
];

router.get('/product', (req, res) => {
  console.log('Product page is connected');
  res.json(productList);
});

router.post('/product', (req, res) => {
  const { name, wine } = req.body;
  productList.push({
    id: id++,
    name,
    wine,
  });
  return res.send('success');
});

export default router;
