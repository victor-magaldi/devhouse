import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import routes from "./routes";

require("dotenv").config();
class App {
  constructor() {
    this.server = express();

    this.connectMongo();

    this.middleware();
    this.route();
  }
  connectMongo = async () => {
    try {
      const uri = `mongodb+srv://devhouse:${process.env.PASSWORD_MONGO_DEVHOUSE_BD}@devhouse.3gauw.mongodb.net/devhouse?retryWrites=true&w=majority`;
      const connectOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
      await mongoose.connect(uri, connectOptions);
    } catch (e) {
      console.log("error:", e);
    }
  };
  middleware() {
    this.server.use(cors());
    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    this.server.use(express.json());
  }
  route() {
    this.server.use(routes);
  }
}

export default new App().server;
