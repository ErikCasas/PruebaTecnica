const Product = require("../../models/products");

/**
  * Toma un nombre de producto de los parámetros de solicitud, 
  * encuentra el producto en la base de datos y devuelve el producto
  * @param req - El objeto de solicitud.
  * @param res - El objeto de respuesta.
  * @returns El producto está siendo devuelto.
  * @throws El producto no fue encontrado y retorna el nuevo error
  * 
  */
const getProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (product) {
       return res.json(product);
      }
      throw new Error('Product not found');
    } catch (error) {
      res.json({error:error.message});
    }
  };

  module.exports = getProduct