const User = require("../../models/user");
const { uploadImage, deleteImage } = require("../../utils/cloudinary");
const fs = require("fs-extra");

/**
 * Toma la identificación de los parámetros de solicitud, encuentra al usuario por id
 * y actualiza al usuario con la solicitud cuerpo.
 * @param req - solicitud
 * @param resolución - {
 * @returns Se devuelve el nuevo error generado
 * 
 * Se hace una revisión de los datos faltantes, ya que al hacer el envio de la info 
 * desde el front, los espacios vacios son remplazan a la info existente, actualizando el producto 
 * completo
 */
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    let user = await User.findById(id);
    // console.log(user);
    console.log(req.body);
    if (!user) {
      return res.json({ error: "User not found" });
    }
    if (!req.body.name) {
      req.body.name = user.name;
    }
    if (!req.body.email) {
      req.body.email = user.email;
    }
    if (!req.body.master) {
      req.body.master = user.master;
    }
    if (!req.body.passwordHash) {
      req.body.passwordHash = user.passwordHash;
    }
    if (!req.file) {
      req.file = user.image;
    } else {
      if (req.file && req.file.fieldname) {
        const public_id = user.image.public_id;
        await deleteImage(public_id);
        
        const result = await uploadImage(req.file.path);
        user.image = {
          public_id: result.public_id,
          secure_url: result.secure_url,
        };
        await fs.unlink(req.file.path);
      }
    }
    
    user = Object.assign(user, req.body);
    // console.log("punto",user);
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.json(error);
  }
};

module.exports = updateUser;
