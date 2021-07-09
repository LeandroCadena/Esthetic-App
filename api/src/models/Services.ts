import { Schema, model } from 'mongoose';

const ServiceSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

ServiceSchema.plugin(require('mongoose-autopopulate'));

export default model('Services', ServiceSchema);
