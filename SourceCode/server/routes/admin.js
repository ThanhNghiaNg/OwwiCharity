const express = require("express")
const projectController = require("../controllers/project")
const transactionController = require("../controllers/transaction")
const partnerController = require("../controllers/partner")
const categoryController = require("../controllers/category")
const userController = require("../controllers/user")
const router = express.Router()

// -------------------- PROJECT 
// POST CREATE PROJECT
router.post("/project", projectController.createProject);

// GET PROJECT INFOMATION
router.get("/project/:id", projectController.getProject);

// DELETE PROJECT 
router.delete("/project/:id", projectController.deleteProject);

// UPDATE PROJECT
router.put("/project/:id", projectController.updateProject);


// -------------------- TRANSACTION 
// GET ALL TRANSACTION
router.get("/transactions", transactionController.getAllTransactions);

// GET TRANSACTION INFOMATION
router.get("/transaction/:id", transactionController.getTransaction);

// UPDATE TRANSACTION
router.put("/transaction/:id", transactionController.updateTransaction);

// -------------------- PARTNER 
// POST CREATE PARTNER
router.post("/partner/create", partnerController.createPartner);

// GET PARTNER INFOMATION
router.get("/partner/:id", partnerController.getPartner);

// DELETE PARTNER 
router.delete("/partner/:id", partnerController.deletePartner);

// UPDATE PARTNER
router.put("/partner/:id", partnerController.updatePartner);


// -------------------- CATEGORY 
// GET ALL CATEGORIES
router.get("/categories", categoryController.getAllCategories);

// POST CREATE CATEGORY
router.post("/categorie/create", categoryController.createCategory);

// GET CATEGORY INFOMATION
router.get("/categorie/:id", categoryController.getCategory);

// DELETE CATEGORY 
router.delete("/categorie/:id", categoryController.deleteCategory);

// UPDATE CATEGORY
router.put("/categorie/:id", categoryController.updateCategory);


// -------------------- USER 

// GET ALL USERS
router.get("/users", userController.getAllUser);

// DELETE USER
router.delete("/user/:id", userController.deleteUser);

module.exports = router