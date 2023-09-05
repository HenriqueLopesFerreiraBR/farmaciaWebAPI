const express = require("express");

const router = express.Router();
const CategoryController = require("../controllers/categoryController");

// GETALL
router.get("/", CategoryController.listCategories);

// GETID
router.get("/:id", CategoryController.categoryId);

// CREATE
router.post("/", CategoryController.createCategory);
// UPDATE
router.put("/:id", CategoryController.updateCategory);

// DELETE
router.delete("/:id", CategoryController.deleteCategory);

module.exports = router;
