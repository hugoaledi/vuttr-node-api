const express = require("express");
const routes = express.Router();

// Rotas de Usuários
const usersController = require('./controllers/usersController');
routes.post('/users', usersController.register);

// Rotas de Ferramentas
const toolsController = require("./controllers/ToolsController");
routes.get("/tools", toolsController.index);
routes.post("/tools", toolsController.create);

module.exports = routes;
