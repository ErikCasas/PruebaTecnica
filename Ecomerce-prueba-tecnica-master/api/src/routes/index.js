const { Router } = require("express");
const router = Router();

//Ruta inicial de prueba
router.get("/", async (req, res) => {
  try {
    console.log('Arriba!!');
    // throw new Error('error')
    res.json({message:"Se levantó el server por fin"});
  } catch (error) {
    res.json({error:error.message});
  }
});

//------------------------------------------------------------

/*Importación de las rutas desde las carpetas de productos y usuarios,
  aquí iniciar la modularización de las rutas, con el fin de no sobrecargar de codigo 
  el mismo archivo index.js
*/
const productRoutes = require('./products/products.routes')
const userRoutes = require('./users/users.routes')

router.use(productRoutes)
router.use(userRoutes)

module.exports = router