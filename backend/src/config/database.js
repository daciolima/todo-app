// const mongoose = require("mongoose");

// // Usando API de Promise do proprio node
// mongoose.Promise = global.Promise;

// module.exports = mongoose.connect(
//   "mongodb+srv://admin:admin@cluster0.r2kau.mongodb.net/todo"
// );

const mongoose = require("mongoose");

const url = `mongodb://localhost/todo`;

const connectionParams = {
  useMongoClient: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
