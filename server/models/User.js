const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "A user must have a username!"],
  },
  email: {
    type: String,
    required: [true, "A user must have an email!"],
    validate: {
      validator: validator.isEmail,
      message: "A user must have a valid email!",
    },
  },
  photo: {
    type: String,
    validate: {
      validator: validator.isURL,
      message: "A user must have a valid photo!",
    },
  },
});

module.exports = mongoose.model("User", UserSchema);
