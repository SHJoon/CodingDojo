const Product = require('../models/product.model');

module.exports = {
    getAll(req, res) {
        Product.find()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    create(req, res) {
        Product.create(req.body)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    getOne(req, res) {
        Product.findById(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json(err);
        })
    }
}