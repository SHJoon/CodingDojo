const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is a required parameter."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters long."]
        }
    }, { timestamp: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;