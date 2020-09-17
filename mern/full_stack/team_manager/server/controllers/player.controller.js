const Player = require('../models/player.model');

module.exports = {
    getAll(req, res) {
        Player.find()
        .then((players) => {
            res.json(players);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    create(req, res) {
        Player.create(req.body)
        .then((player) => {
            res.json(player);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
    },

    getOne(req, res) {
        Player.findById(req.params.id)
        .then((player) => {
            res.json(player);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    update(req, res) {
        Player.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
        .then((player) => {
            res.json(player);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
    },

    delete(req, res) {
        Player.findByIdAndDelete(req.params.id)
        .then((player) => {
            res.json(player);
        })
        .catch((err) => {
            res.json(err);
        });
    }
}