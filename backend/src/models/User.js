import { Schema, Model, model } from "mongoose";

const UserSchema = new Schema({
  email: String,
  name: String,
});

// para criar um model  você define o nome ("User") e o schema desse model
export default model("User", UserSchema);
