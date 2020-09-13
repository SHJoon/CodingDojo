const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "{PARAM} is a required parameter."]
        },
        price: {
            type: Number,
            required: [true, "{PARAM} is a required parameter."]
        },
        description: {
            type: String,
            required: [true, "{PARAM} is a required parameter."]
        }
    }, { timestamp: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;