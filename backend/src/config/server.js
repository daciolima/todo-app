const port = 3003;
const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const allowCors = require("./cors");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// Permitindo o server resolver requisições de origens externas
server.use(allowCors);

server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}.npm `);
});

module.exports = server;
