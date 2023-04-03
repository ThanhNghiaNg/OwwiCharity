const Category = require("../models/Category")

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.send(categories);
  } catch (err) {
    return res.status(500).send({ error: "Server Error" });
  }
};

exports.getCategory = async (req, res, next) => {};

exports.createCategory = async (req, res, next) => {};

exports.deleteCategory = async (req, res, next) => {};

exports.updateCategory = async (req, res, next) => {};
