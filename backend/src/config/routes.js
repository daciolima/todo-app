const express = require("express");

module.exports = function (server) {
  // API routes
  const router = express.Router();
  // middleware
  server.use("/api", router);

  // Todo routes
  const todoServices = require("../api/todo/todoServices");
  // Criando rotas a partir de api/todos contendo todos os verbos https do arquivo todoServices.js
  todoServices.register(router, "/todos");
};
