const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require('./app/middlewares/errorHandler');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./app/routes"));
// Middleware de tratamento de erros
app.use(errorHandler);

app.listen(3000);
