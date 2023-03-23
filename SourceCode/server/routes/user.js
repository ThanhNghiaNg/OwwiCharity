const userController = require("../controllers/user");
const express = require("express");
const router = express.Router();

// GET ALL USER
router.get("/", userController.getAllUser);

// GET USER INFOMATION
router.get("/:id", userController.getUserInfomation);

// UPDATE USER
router.put("/:id", userController.updateInformtaion);

// CHANGE USER PASSWORD
router.put("/:id/password/change", userController.updatePassword);

// BLOCK USER
router.patch("/:id/block", userController.blockAccount);

module.exports = router;
