const server = require("./config/server");
require("./config/database");
// chama a função com o parâmetro(server) do arquivo routes
require("./config/routes")(server);
