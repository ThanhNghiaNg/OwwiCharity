const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = Schema(
  {
    title: { type: String, require: true },
    shortDesc: { type: String, require: true },
    content: { type: String, require: true },
    imageURL: { type: String, require: true },
    location: { type: String, require: true },
    sponsor: { type: String, require: false },
    partner: { type: Schema.Types.ObjectId, require: true, ref: "Partner" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);
