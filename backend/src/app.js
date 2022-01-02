import express from "express";
import mongoose from "mongoose";
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
      const uri = `mongodb+srv://devhouse:${process.env.PASSWORD_MONGO_DEVHOUSE_BD}@devhouse.3gauw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
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
    this.server.use(express.json());
  }
  route() {
    this.server.use(routes);
  }
}

export default new App().server;
