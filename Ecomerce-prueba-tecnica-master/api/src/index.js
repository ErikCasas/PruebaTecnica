/* 
Este es el archivo server.js. Es el punto de entrada de la aplicación.
Está importando el app.js
y el archivo db.js. También configura el puerto en 3001. También inicia el servidor. 
*/
const app = require("./app");
const db = require("./db");

const PORT = process.env.PORT || 3001;


/*esta es una función autoinvocada, por ello no se ve como se aconstumbran a ver las 
inicializaciones de server express
*/
const server = (() => {
  try {
    db();
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
})()
