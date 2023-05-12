const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        descri: {
            type: String,
        },
        manufacturer: {
            type: String,
        },
        category: {
            type: Array,
        },
        classification: {
            type: Array,
        },
        genericName: {
            type: String,
        },
        purchasePrice: {
            type: String,
        },
        salePrice: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product',ProductSchema)