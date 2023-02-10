const Product = require("../../models/products");
const { uploadImage, deleteImage } = require('../../utils/cloudinary');
const fs = require("fs-extra");


/**
  * Elimina la imagen de cloudinary, luego sube la nueva imagen a cloudinary, luego guarda la nueva
  * imagen a la base de datos.
  * @param req - el objeto de solicitud
  * @param res - el objeto de respuesta
  */

/**
 * ESTA RUTA NO SE USA, YA QUE LA CREÉ COMO SOLUCIÓN A BUGS QUE ME COSTARON SOLUCIONAR
 * ASI QUE HICE ESTA RUTA COMO SOLUCIÓN RAPIDA
 */
const updateImageProduct = async (req, res) =>{
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    const public_id = product.image.public_id
    await deleteImage(public_id)
    
    if (req.file.fieldname) {
      const result = await uploadImage(req.file.path);
      product.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.file.path); //borra del repo local y lo deja en el clou
      const savedProduct = await product.save();
      res.json(savedProduct);
    }
  } catch (error) {
    res.json(error);
  }
}

module.exports = updateImageProduct