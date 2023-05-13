const Partner = require("../models/Partner");
const { getPagingResult } = require("../utils/global");

exports.getAllPartners = async (req, res, next) => {
  try {
    const page = req.query.page ? req.query.page : 1;
    const pageSize = req.query.pageSize ? req.query.pageSize : 8;
    const partners = await Partner.find().sort("name");
    if (req.session.user && req.session.user.isAdmin && req.session.role === 'admin') {
      return res.send(partners);
    }
    return res.send(getPagingResult(partners, page, pageSize));
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Server Error" });
  }
};

exports.getPartner = async (req, res, next) => {};

exports.createPartner = async (req, res, next) => {};

exports.deletePartner = async (req, res, next) => {};

exports.updatePartner = async (req, res, next) => {};
