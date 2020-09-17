const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is a required parameter."],
            minlength: [2, "{PATH} has to be at least {MINLENGTH} characters long."]
        },
        position: {
            type: String
        },
        game1: {
            type: String,
            enum: ['Playing', 'Not Playing', 'Undecided'],
            default: 'Undecided'
        },
        game2: {
            type: String,
            enum: ['Playing', 'Not Playing', 'Undecided'],
            default: 'Undecided'
        },
        game3: {
            type: String,
            enum: ['Playing', 'Not Playing', 'Undecided'],
            default: 'Undecided'
        }
    }, { timestamp: true }
);

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;