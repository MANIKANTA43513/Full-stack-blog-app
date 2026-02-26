const express = require("express");
const router = express.Router();
const controller = require("../controllers/aiController");

router.post("/", controller.generate);

module.exports = router;