const express = require("express");

const router = express.Router();

router.post("/google", authController.postGoogleIdentity);

module.exports = router;
