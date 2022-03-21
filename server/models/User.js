const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "A user must have an email!"],
    validate: {
      validator: validator.isEmail,
      message: "A user must have a valid email!",
    },
  },
  name: {
    type: String,
    required: [true, "A user must have a name!"],
  },
  photo: {
    type: String,
    validate: {
      validator: validator.isURL,
      message: "A user must have a valid photo!",
    },
  },
  googleId: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  firstName: String,
  familyName: String,
});

module.exports = mongoose.model("User", UserSchema);
