const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  fullName: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: Num, require: true },
  address: { type: String, require: true },
});

module.exports = mongoose.model("User", userSchema);
