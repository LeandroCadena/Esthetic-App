import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    picture: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      // validate: {
      //   validator: function (v: string) {
      //     return /\S@\S.\mail.\S/.test(v);
      //   },
      //   message: 'Por favor ingresar un email válido',
      // },
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    asignated: {
      type: Date,
      required: false,
    },
    // services: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'services',
    //     autopopulate: true,
    //   },
    // ],
  },
  { versionKey: false, timestamps: true }
  // versionKey para quitar el anuncio molesto de mongodb y timestamps para  saber cuando fue creado y cuando fue actualizado
);

UserSchema.plugin(require('mongoose-autopopulate')); // codigo para usar mongoose autopopulate

export default model('Users', UserSchema); // la funcion model recibe 2 parametros el primero en nombre del modelo y el segundo el schema
