const cloudinary = require("cloudinary");
require("dotenv").config();

cloudinary.config({ 
  cloud_name: 'dgf0aphhn', 
  api_key: '682285194886458', 
  api_secret: '6B8Cm2cNkPq409_EKWsSskJGTE0' 
});

/**
* Toma una ruta de archivo como argumento y sube la imagen a Cloudinary
* @param filePath: la ruta al archivo que desea cargar.
* @returns La URL de la imagen
*/
const uploadImage = async (filePath) => {
  return await cloudinary.v2.uploader.upload(filePath, {
    folder: "Products",
  });
};

/**
* Toma un publicId como argumento y devuelve una promesa que resuelve el resultado de la
* función cloudinary.v2.uploader.destroy()
* @param publicId: el ID público de la imagen que se va a eliminar.
* @returns La respuesta de la API cloudinary.
 */
const deleteImage = async (publicId) => {
  return await cloudinary.v2.uploader.destroy(publicId);
};

module.exports = { uploadImage, deleteImage };
