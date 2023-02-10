const { Schema, model } = require("mongoose");
/**
 * se crea un nevo esquema para el modelo del producto
 * donde el unico valor unico debe ser el nombre del producto 
 * ya que es la principal identificación que he dicidido tener a parte del id
 */
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    price: {
      type: Number,
    },
    brand: {
      type: String,
    },
    description: {
      type: String,
    },
    image: Object,
    stock: Number,
    category: String,

  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
