"use strict";
import express from "express";
const router = express.Router();

import { getUser } from "../controller/userController.js";

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

export default router;
