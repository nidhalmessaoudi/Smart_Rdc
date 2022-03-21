const express = require("express");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/authRoutes");

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

app.get("*", (req, res) => {
  res.end("Hello from the other side!!!");
});

module.exports = app;
