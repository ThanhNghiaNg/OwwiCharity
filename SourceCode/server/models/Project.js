const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = Schema({
  title: { type: String, require: true },
  shortDesc: { type: String, require: true },
  longDesc: { type: String, require: true },
  story: { type: String, require: true },
  createDate: { type: Date, require: true },
  EndDate: { type: Date, require: true },
  FinishPercent: { type: Number, require: true },
  TotalMoney: { type: Number, require: true },
  TotalTrans: { type: Number, require: true },
  ExpectedValue: { type: Number, require: true },
  imageURLs: { type: Object, require: true },
  partner: {type: Schema.Types.ObjectId, require: true, ref: "Partner"}
});

module.exports = mongoose.model("Project", projectSchema);
