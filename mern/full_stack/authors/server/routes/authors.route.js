const authorController = require("../controllers/authors.controller");

module.exports = (app) => {
    app.get("/api/authors", authorController.getAll);
    app.post("/api/authors/create", authorController.create);
    app.get("/api/authors/:id", authorController.getOne);
    app.put("/api/authors/:id", authorController.update);
    app.delete("/api/authors/:id", authorController.delete);
}