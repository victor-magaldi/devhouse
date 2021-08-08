import { Schema, Model, model } from "mongoose";

const HouseSchema = new Schema({
  thumbnail: String,
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// para criar um model  você define o nome ("House") e o schema desse model
export default model("House", HouseSchema);
