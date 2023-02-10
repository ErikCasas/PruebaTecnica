const User = require("../../models/user");
const { uploadImage, deleteImage } = require("../../utils/cloudinary");
const fs = require("fs-extra");

/**
  * Encuentra al usuario por id, elimina la imagen de cloudinary, sube la nueva imagen a cloudinary y
  * luego guarda al usuario con la nueva imagen.
  * @param req - el objeto de solicitud
  * @param res - el objeto de respuesta
  */

/**
 * ESTA RUTA NO SE USA, YA QUE LA CREÉ COMO SOLUCIÓN A BUGS QUE ME COSTARON SOLUCIONAR
 * ASI QUE HICE ESTA RUTA COMO SOLUCIÓN RAPIDA
 */
const updateImageUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    const public_id = user.image.public_id;
    await deleteImage(public_id);

    if (req.file.fieldname) {
      const result = await uploadImage(req.file.path);
      user.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.file.path); //borra del repo local y lo deja en el clou
      const savedUser = await user.save();
      res.json(savedUser);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = updateImageUser;
