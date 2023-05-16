const express = require("express")
const projectController = require("../controllers/project")
const partnerController = require("../controllers/partner")
const router = express.Router()

// -------------------- PROJECT
// GET ALL PROJECT
router.get("/projects", projectController.getAllProjects);

// -------------------- PROJECT
// GET ALL PROJECT
router.get("/project/:id", projectController.getProject);

// -------------------- PARTNER 
// GET ALL PARTNERS
router.get("/partners", partnerController.getAllPartners);


module.exports = router