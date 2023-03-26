const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, require: true, ref: "User" },
    project: { type: Schema.Types.ObjectId, require: true, ref: "Project" },
    amount: { type: Number, require: true },
    message: { type: String, require: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
