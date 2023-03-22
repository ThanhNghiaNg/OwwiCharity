const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = Schema({
  user: { type: Schema.Types.ObjectId, require: true, ref: "User" },
  project: { type: Schema.Types.ObjectId, require: true, ref: "Project" },
  amount: { type: Number, require: true, ref: "Project" },
  message: { type: String, require: false },
  createDate: { type: Date, require: true },
});

module.exports = mongoose.model("Transaction", transactionSchema);
