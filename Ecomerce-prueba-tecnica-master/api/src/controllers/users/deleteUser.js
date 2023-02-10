const User = require("../../models/user");

/**
  * Toma la id de los parámetros de solicitud, encuentra al usuario por identificación 
  * y lo elimina, si el usuario no es encontrado arroja un error, 
  * si se encuentra el usuario devuelve el usuario eliminado.
  * @param req - solicitud
  * @param res - El objeto de respuesta.
  */
 
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error("User not found");
    }
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = deleteUser;
