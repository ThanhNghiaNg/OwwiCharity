const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
    fullName: { type: String, require: true },
    phone: { type: String, require: true },
    email: { type: String, require: false },
    address: { type: String, require: false },
    avatar: { type: String, require: false },
    isAdmin: { type: Boolean, require: true },
  },
);

module.exports = mongoose.model("User", userSchema);
