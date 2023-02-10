const { Router } = require("express");
const multer = require("multer");//es un middleware para manejar archivos en el lado del servidor

const getProducts = require("../../controllers/products/getAllProducts");
const createProduct = require("../../controllers/products/createProduct");
const getProduct = require("../../controllers/products/getProductByName");
const deleteProduct = require("../../controllers/products/deleteProduct");
const updateProduct = require("../../controllers/products/updateProduct");
const updateImageProduct = require("../../controllers/products/updateImageProduct");

const router = Router();
const upload = multer({ dest: "uploads/" });//se define el destino de los archivos

//se definen las rutas de tal modo que sean mas expresivas y se entienda que se hace en cada una
//upload.single("image") se usa para manejar la subida de una sola imagen

router.post("/create-product", upload.single("image"), createProduct);
router.delete("/delete-product/:id", deleteProduct);
router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.put("/update-product/:id",upload.single("image"), updateProduct);
// router.put("/updateImage-product/:id", upload.single("image"), updateImageProduct);

module.exports = router;