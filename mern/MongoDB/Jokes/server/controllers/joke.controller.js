const Joke = require("../models/joke.model");

module.exports = {
    getAll( res) {
        Joke.find()
        .then((jokes) => {
            res.json(jokes);
        })
        .catch((err) => {
            res.json(err);
        });
    },

    getOne(req, res) {
        Joke.findById(req.params.id)
        .then((joke) => {
            res.json(joke);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    create(req, res) {
        Joke.create(req.body)
        .then((city) => {
            res.json(city);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    update(req, res) {
        Joke.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
        .then((city) => {
            res.json(city);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    delete(req, res) {
        Joke.findByIdAndRemove(req.params.id)
        .then((city) => {
            res.json(city);
        })
        .catch((err) => {
            res.json(err);
        })
    }
}