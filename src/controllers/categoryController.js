const CategoryModel = require("../model/categoryModel");

const CategoryController = {
    //GET ALL
    listCategories: async (req, res) => {
        try {
            const categories = await CategoryModel.find();
            res.status(200).json(categories);
        } catch (error) {
            res.status(422).json(error);
        }
    },

    // GET ID
    categoryId: async (req, res) => {
        const id = req.params.id;

        try {
            const category = await CategoryModel.findById(id);
            res.status(200).json(category);
        } catch (error) {
            res.status(401).json(error);
        }
    },

    //CREATE
    createCategory: async (req, res) => {
        const { name, description } = req.body;

        try {
            const newCategory = new CategoryModel({
                name: name,
                description: description,
            });

            await newCategory.save();
            res.status(201).json({
                message: "Categoria cadastrada",
                newCategory,
            });
        } catch (error) {
            res.status(400).json(error);
        }
    },

    // UPDATE
    updateCategory: async (req, res) => {
        const id = req.params.id;

        const category = {
            $set: req.body,
        };
        try {
            const categoryUpdated = await CategoryModel.findByIdAndUpdate(
                id,
                category
            );
            res.status(200).json({ message: "Categoria Atualizada", category });
        } catch (error) {
            res.status(401).json(error);
        }
    },

    // DELETE

    deleteCategory: async (req, res) => {
        const id = req.params.id;

        try {
            const categoryDeleted = await CategoryModel.findByIdAndDelete(id);
            res.status(200).json({ message: "Categoria deletada" });
        } catch (error) {
            res.status(401).json(error);
        }
    },
};

module.exports = CategoryController;
