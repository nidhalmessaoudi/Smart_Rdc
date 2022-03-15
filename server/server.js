const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = require("./app");

(async function init() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to db successfully");

    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`The server has started on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
