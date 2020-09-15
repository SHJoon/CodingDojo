const productController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/products", productController.getAll);
    app.post("/api/products/create", productController.create);
    app.get("/api/products/:id", productController.getOne);
}