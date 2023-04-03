const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fs = require("fs");

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

projectSchema.methods.updateImages = function (images) {
  const updatedImages = [...this.images];
  if (updatedImages.length > 0) {
    // Filter which image is remove
    const deletedImages = this.images.filter((img) => {
      return images.all((uImg) => uImg.url != img.url);
    });
    // delete image file
    deletedImages.forEach((img) => {
      fs.unlink(img.url, (err) => {
        if (err) console.log(err);
        else console.log("Xóa tệp tin thành công");
      });
    });
  }
  updatedImages = [...images];
  this.images = [...updatedImages]
  return this.save()
};
module.exports = mongoose.model("Project", projectSchema);
