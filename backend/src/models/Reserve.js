import { Schema, model } from "mongoose";

const ReserveSchema = new Schema({
  date: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  house: {
    type: Schema.Types.ObjectId,
    ref: "House",
  },
});

// para criar um model  você define o nome ("User") e o schema desse model
export default model("Reserve", ReserveSchema);
