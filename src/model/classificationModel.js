const mongoose = require("mongoose");

const ClassificationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            min: 3,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Classification',ClassificationSchema)