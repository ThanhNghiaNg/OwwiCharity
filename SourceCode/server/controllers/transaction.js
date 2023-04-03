const Transaction = require("../models/Transaction");

exports.getAllTransactions = async (req, res, next) => {
  try {
    const query = req.query.q.toLowerCase();
    console.log(query);
    const transactions = await Transaction.find().populate([
      {
        path: "user",
        select: "username",
      },
      { path: "project", select: "title" },
    ]);
    const filteredTransaction = transactions.filter(
      (trans) =>
        trans.user.username.toLowerCase().includes(query) ||
        trans.project.title.toLowerCase().includes(query) ||
        trans._id.toString().includes(query)
    );
    console.log(filteredTransaction);
    return res.send(filteredTransaction);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Server Error" });
  }
};

exports.getTransaction = async (req, res, next) => {};

exports.createTransaction = async (req, res, next) => {};

exports.deleteTransaction = async (req, res, next) => {};

exports.updateTransaction = async (req, res, next) => {};
