"use strict";
const express = require("express");
const apiController = require("../controllers/api.controller");

const router = express.Router();
router.get("/", (req, res) => res.json({ message: "Welcome to API" }));
router.post("/withdraw", apiController.withdraw);

module.exports = router;
