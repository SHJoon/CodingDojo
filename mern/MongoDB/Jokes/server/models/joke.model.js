const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            require: [true, "{PARAM} is a required field."],
            minlength: [10, "{PATH} must be at least {MINLENGTH} characters."]
        },
        punchline: {
            type: String,
            require: [true, "{PARAM} is a required field."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."]
        }
    },
    { timestamps: true }
)

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;