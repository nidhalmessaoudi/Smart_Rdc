const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

router.post("/google", authController.postGoogleIdentity);

module.exports = router;
