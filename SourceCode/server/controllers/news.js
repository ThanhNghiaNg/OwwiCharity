const News = require("../models/News");
const { getPagingResult } = require("../utils/global");

exports.getAllNews = async (req, res, next) => {
  const page = req.query.page ? req.query.page : 1;
  const pageSize = req.query.pageSize ? req.query.pageSize : 8;
  const news = await News.find().populate("partner");
  return res.send(getPagingResult(news, page, pageSize));
};
