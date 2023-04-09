const News = require("../models/News")

exports.getAllNews = async(req, res, next)=>{
    const news = await News.find().populate("partner")
    return res.send(news)
}