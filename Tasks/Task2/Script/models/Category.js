const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = Schema({
  name: { type: String, require: true },
  desciption: { type: String, require: false },
});

module.exports = mongoose.model("Category", categorySchema);
