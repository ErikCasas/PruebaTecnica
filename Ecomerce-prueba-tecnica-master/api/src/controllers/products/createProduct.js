const fs = require("fs-extra");
const Product = require("../../models/products");
const { uploadImage } = require("../../utils/cloudinary");

 /**
  * En esta ruta creo un nuevo producto, pasando la imagen y subiendola a cloudinary
  * seteando el resto de datos en mi Db, dejando como referencia de la imagen, un objeto 
  * en donde esta la imagen en cloudinary
  */
const createProduct = async (req, res) => {
    try {
      const { name, price, brand, description, stock, category } = req.body;
      const existProduct = await Product.find({name:name})
      if (existProduct.length>0){ throw new Error("This product already exists")}
      const product = new Product({
        name,
        price,
        brand,
        description,
        stock,
        category,
      });
      console.log(product);
      //verifica si recive la img y la sube a cloudinary y me da la URL de en donde esta la img
      if (req.file.fieldname) {
        const result = await uploadImage(req.file.path);
        product.image = {
          public_id: result.public_id,
          secure_url: result.secure_url,
        };
        await fs.unlink(req.file.path); //borra del repo local y lo deja en el cloudinary
      }
      const savedProduct = await product.save();
      res.json(savedProduct);
    } catch (error) {
      res.json({error:error.message});
    }
  };

module.exports = createProduct
  