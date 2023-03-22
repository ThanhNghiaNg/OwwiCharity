const express = require("express");
const router = express.Router();

// GET ALL USER
router.get("/");

// POST
router.post("/create");

// GET USER INFOMATION
router.get("/:id");

// UPDATE USER
router.put("/:id");

// CHANGE USER PASSWORD
router.put("/:id/password/change");

// BLOCK USER
router.patch("/:id/block");

module.exports = router;
