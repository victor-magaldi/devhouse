import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    mongoose.connect(
      "mongodb+srv://devhouse:devhouse12345678@devhouse.3gauw.mongodb.net/devhouse?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    this.middleware();
    this.route();
  }

  middleware() {
    this.server.use(express.json());
  }
  route() {
    this.server.use(routes);
  }
}

export default new App().server;
