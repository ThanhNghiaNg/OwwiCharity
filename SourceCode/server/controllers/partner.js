const Partner = require("../models/Partner");

exports.getAllPartners = async (req, res, next) => {
  try {
    const partners = await Partner.find();
    return res.send(partners);
  } catch (err) {
    return res.status(500).send({ error: "Server Error" });
  }
};

exports.getPartner = async (req, res, next) => {};

exports.createPartner = async (req, res, next) => {};

exports.deletePartner = async (req, res, next) => {};

exports.updatePartner = async (req, res, next) => {};
