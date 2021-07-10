import { Router } from "express";
import SessionController from "./controllers/SessionController";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ ok: false });
});
routes.post("/session", SessionController.store);
export default routes;
