const Product = require("../../models/products");
const { uploadImage, deleteImage } = require("../../utils/cloudinary");
const fs = require("fs-extra");

/**
 * Encuentra un producto por su id y lo actualiza con los datos enviados en el cuerpo de la solicitud.
 * verificando primero que se este recibiendo un dato, de lo contrario remplaza el espacio vacio 
 * por el que ya existe, para evitar que si no se desean hacer cambios a cierto espacio, solo llene los 
 * espacios que se desean cambiar 
 * @param req - solicitud
 * @param res - respuesta
 * @returns El producto no fue encontrado y se retorna el error.
 */

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    let product = await Product.findById(id);

    if (!product) {
      return res.json({ error: "Product not found" });
    }
    // console.log(req.body.name);
    // console.log(req.file);
    // console.log("este",product);
    if (!req.body.name) {
      req.body.name = product.name;
    }
    if (!req.body.price) {
      req.body.price = product.price;
    }
    if (!req.body.brand) {
      req.body.brand = product.brand;
    }
    if (!req.body.description) {
      req.body.description = product.description;
    }
    if (!req.body.category) {
      req.body.category = product.category;
    }
    if (!req.body.stock) {
      req.body.stock = product.stock;
    }
    if (!req.file) {
      req.file = product.image;
      // console.log("nuevo",req.file);
      console.log(product.image, "alog", req.file);
    }
    else{
      if (req.file && req.file.fieldname) {
        const public_id = product.image.public_id;
        await deleteImage(public_id);
        
        console.log("pint", req.file.path);
        const result = await uploadImage(req.file.path);
        product.image = {
          public_id: result.public_id,
          secure_url: result.secure_url,
        };
        await fs.unlink(req.file.path);
      }
    }
    
      product = Object.assign(product, req.body);
    console.log("FIIN", product);
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

// const updateProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.json({ error: "Product not found" });
//     }
//     res.json(product);
//   } catch (error) {
//     res.json(error);
//   }
// };

module.exports = updateProduct;
