const User = require("../../models/user");
const fs = require("fs-extra");
const { uploadImage } = require("../../utils/cloudinary");

/**
 * En esta ruta creo un nuevo producto, pasando la imagen y subiendola a cloudinary
 * seteando el resto de datos en mi Db, dejando como referencia de la imagen, un objeto
 * en donde esta la imagen en cloudinary
 * @param req - El objeto de solicitud.
 * @param res - el objeto de respuesta
 */

const createUser = async (req, res) => {
  try {
    const { name, email, passwordHash, master } = req.body;
    console.log("nuevo", req.body, req.file);
    const user = new User({
      name,
      email,
      master,
      passwordHash,
    });
    if (req.file.fieldname) {
      const result = await uploadImage(req.file.path);
      user.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.file.path); //borra del repo local y lo sube a cludinary
    }
    await user.save();
    console.log("nuevo punto");
    res.json(savedUser);
  } catch (error) {
    res.json(error);
  }
};

module.exports = createUser;
