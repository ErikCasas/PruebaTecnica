const { Router } = require("express");
const multer = require("multer");

const createUser = require("../../controllers/users/createUser");
const deleteUser = require("../../controllers/users/deleteUser");
const getAllUsers = require("../../controllers/users/getAllusers");
const getUser = require("../../controllers/users/getUserbyEmail");
const updateImageUser = require("../../controllers/users/updateImageUser");
const updateUser = require("../../controllers/users/updateUser");

const router = Router();
const upload = multer({ dest: "uploads/" });

// se definen las rutas de tal modo que sean mas expresivas y se entienda que se hace en cada una
//upload.single("image") se usa para manejar la subida de una sola imagen

router.post("/create-user", upload.single("image"), createUser);
router.delete("/delete-user/:id", deleteUser);
router.get("/user/:email", getUser);
router.get("/users", getAllUsers);
router.put("/update-user/:id", upload.single("image"), updateUser);
// router.put("/updateImage-user/:id", upload.single("image"), updateImageUser);

module.exports = router;