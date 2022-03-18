const express = require("express");

const app = express();

const authController = require("./controllers/authController");

app.use(express.json());

app.post("/api/v1/auth/google", authController.postGoogleIdentity);

app.get("*", (req, res) => {
  res.end("Hello from the other side!!!");
});

module.exports = app;
