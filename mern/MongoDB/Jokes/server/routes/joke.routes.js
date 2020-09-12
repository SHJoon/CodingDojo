const jokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.post("/api/jokes", jokeController.create);
    app.get("/api/jokes", jokeController.getAll);
    app.get("/api/jokes/:id", jokeController.getOne);
    app.put("/api/jokes/:id", jokeController.update);
    app.delete("/api/jokes/:id", jokeController.delete);
}