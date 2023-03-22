const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = Schema({
  title: { type: String, require: true },
  shortDesc: { type: String, require: true },
  longDesc: { type: String, require: true },
  story: { type: String, require: true },
  createDate: { type: Date, require: true },
  endDate: { type: Date, require: true },
  finishPercent: { type: Number, require: true },
  totalMoney: { type: Number, require: true },
  totalTrans: { type: Number, require: true },
  expectedMoney: { type: Number, require: true },
  imageURLs: { type: Object, require: true },
  partner: {type: Schema.Types.ObjectId, require: true, ref: "Partner"}
});

module.exports = mongoose.model("Project", projectSchema);
