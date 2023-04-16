const express = require("express")
const projectController = require("../controllers/project")
const partnerController = require("../controllers/partner")
const newsController = require("../controllers/news")
const router = express.Router()

// -------------------- PROJECT
// GET ALL PROJECT
router.get("/projects", projectController.getAllProjects);

// -------------------- PARTNER 
// GET ALL PARTNERS
router.get("/partners", partnerController.getAllPartners);

// -------------------- PARTNER 
// GET ALL NEWS
router.get("/news", newsController.getAllNews);

module.exports = router