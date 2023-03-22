const express = require("express")
const router = express.Router()

// GET ALL PROJECT
router.get("/projects");

// POST ADD PROJECT
router.post("/project/create");

// GET PROJECT INFOMATION
router.get("/project/:id");

// DELETE PROJECT 
router.delete("/project/:id");

// EDIT PROJECT
router.put("/project/:id");

// DELETE USER
router.delete("user/:id/delete");

module.exports = router