const Product = require('../../models/products')

/**
* El metodo findByIdAndDelete es expresivo y es exactamente lo que se hace
*si, no lo encuentra, el metodo mismo arroja un error
* @param req - solicitud
* @param res - El objeto de respuesta.
*/

const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const algo = await Product.findByIdAndDelete(id);
      res.send(algo);
    } catch (error) {
      res.send(error);
    }
  };

module.exports = deleteProduct