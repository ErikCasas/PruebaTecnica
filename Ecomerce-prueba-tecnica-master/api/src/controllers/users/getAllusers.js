const User = require("../../models/user");

/**
  * Obtiene todos los usuarios de la base de datos y los envía al cliente.
  * @param req - el objeto de solicitud
  * @param res - el objeto de respuesta
  */
 
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users.length) {
      throw new Error("there are no users in the database")
    } else {
      res.json(users);
    }
  } catch (error) {
    res.json({error:error.message});
  }
};

module.exports = getAllUsers;
