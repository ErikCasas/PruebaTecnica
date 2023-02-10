const Product = require("../../models/products");

/**
 * Es una función asíncrona que usa la palabra clave await para esperar el resultado de find()
 * método en el modelo Producto.
 * El método find() devuelve todos los documentos de la colección Product.
 * Si ocurre un error, el error se devuelve al cliente como una respuesta JSON .
 */
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products.length) {
      throw new Error("there are no products in the database");
    } else {
      res.json(products);
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = getProducts;
