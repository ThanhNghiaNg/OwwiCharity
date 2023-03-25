const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partnerSchema = Schema({
  name: { type: String, require: true },
  avatar: { type: Object, require: true },
  shortDesc: { type: String, require: true },
  longDesc: { type: String, require: true },
  additionalDesc: {
    title: { type: String, require: true },
    desc: { type: String, require: true },
  },
});

module.exports = mongoose.model("Partner", partnerSchema);
