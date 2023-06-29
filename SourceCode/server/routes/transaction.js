const express = require("express");
const transactionController = require("../controllers/transaction");
const isAuthUser = require("../middlewares/isAuthUser");
const router = express.Router();

router.post(
  "/transaction",
  isAuthUser,
  transactionController.createTransaction
);

module.exports = router;
