const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partnerSchema = Schema({
  name: { type: String, require: true },
  imageURL: { type: Object, require: true },
  desciption: { type: String, require: true },
});

module.exports = mongoose.model("Partner", partnerSchema);
