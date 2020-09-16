const Author = require('../models/authors.model');

module.exports = {
    getAll(req, res) {
        Author.find()
        .then((authors) => {
            res.json(authors);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    create(req, res) {
        Author.create(req.body)
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
    },

    getOne(req, res) {
        Author.findById(req.params.id)
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    update(req, res) {
        Author.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
    },

    delete(req, res) {
        Author.findByIdAndDelete(req.params.id)
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.json(err);
        });
    }
}