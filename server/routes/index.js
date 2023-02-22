"use strict";
import express from "express";
const router = express.Router();
import { Product } from "../models/index.js";
import { postProduct } from "../controller/productController.js";

// http://localhost:8080
router.get("/", (req, res) => {
  res.render("index");
});

// http://localhost:8080/product
router.get("/product", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.post("/product", postProduct);

export default router;
