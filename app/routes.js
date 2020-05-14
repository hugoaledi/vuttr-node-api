const express = require("express");
const routes = express.Router();

// Rotas de Ferramentas
const ToolsController = require("./controllers/ToolsController");
routes.get("/tools", ToolsController.index);
routes.post("/tools", ToolsController.create);

module.exports = routes;
