const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = Schema({
  title: { type: String, require: true },
  category: { type: Schema.Types.ObjectId, require: true, ref: "Category" },
  shortDesc: { type: String, require: true },
  story: { type: String, require: true },
  startDate: { type: Date, require: true },
  endDate: { type: Date, require: true },
  finishPercent: { type: Number, require: true },
  totalMoney: { type: Number, require: true },
  totalTrans: { type: Number, require: true },
  expectedMoney: { type: Number, require: true },
  images: [
    {
      name: { type: String, require: false },
      url: { type: String, require: true },
      description: { type: String, require: false },
    },
  ],
  partner: { type: Schema.Types.ObjectId, require: true, ref: "Partner" },
});

module.exports = mongoose.model("Project", projectSchema);
