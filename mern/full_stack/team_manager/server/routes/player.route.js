const playerController = require("../controllers/player.controller");

module.exports = (app) => {
    app.get("/api/players", playerController.getAll);
    app.post("/api/players/create", playerController.create);
    app.get("/api/players/:id", playerController.getOne);
    app.put("/api/players/:id", playerController.update);
    app.delete("/api/players/:id", playerController.delete);
}