/* 
Aquí hago la conexión con mongoDb @process.env.URL 
hace refecrencia a variables que tengo en el archivo .env 
en el cual se ponen datos sensibles que no deben ser vistos
como la apiKey de mi base de datos.
*/
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

const db = () => {
  mongoose.connect(process.env.URL);
  console.log("Connected to the world");
};

module.exports = db;
