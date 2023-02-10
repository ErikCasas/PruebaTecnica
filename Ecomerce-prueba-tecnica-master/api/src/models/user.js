const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

/**
 * se crea un nevo esquema para el modelo del usuario
 * donde el unico valor unico debe ser el email del usuario
 * ya que es la principal identificación a parte del id.
 */

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: Object,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
    },
    master: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

userSchema.plugin(uniqueValidator);

const User = model("User", userSchema);

module.exports = User;
