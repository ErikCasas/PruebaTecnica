const User = require("../../models/user");

/**
  * Obtiene un usuario por email, si no se encuentra el usuario, arroja un error, 
  * si se encuentra el usuario, envía el usuario
  * @param req - objeto de solicitud
  * @param res - el objeto de respuesta
  */
const getUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({email:email});
    if (user === null) {
      throw new Error("user not found");
    }
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = getUser;
