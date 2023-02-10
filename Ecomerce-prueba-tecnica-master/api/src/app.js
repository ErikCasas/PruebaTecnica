const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const bodyParser = require("body-parser");
// const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" })); //se parsea el cuerpo de las solicitudes a JSON
// app.use(express.json()) ==>alternativa de uso, pero la anterior esta habilitada para solicitudes pesadas
app.use(morgan("dev")); //proporciona una representación detallada de la solicitud HTTP

/**
 * doy acceso al front para hacer peticiones y asi no me arroje respuestas HTTP que indiquen que 
 * la petición es correcta pero no se tiene acceso
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // doy acceso al front);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(routes); //añade las rutas definidas en routes
// app.use(cors())

module.exports = app;
