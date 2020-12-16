const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]);
// Força o metodo put retornar objeto atualizado e validar insert update nos campos
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;
