import Reserve from "../models/Reserve";

class ReserveController {
  async index(req, res) {
    const { user_id } = req.headers;

    res.json({ ok: true });
  }

  async store(req, res) {
    const { user_id } = req.headers;
    const { house_id } = req.params;
    const { date } = req.body;

    const house = await House.findById(house_id);
    if (!house) {
      res.status(400).json({ error: "Esta casa não existe" });
    }

    if (house?.status !== true) {
      res.status(400).json({ error: "Solicitação indisponível" });
    }

    const user = await User.findById(user_id);
    if (String(user?._id) === String(house?.user)) {
      res.status(401).json({ error: "Reserva não permitida" });
    }
    const reserve = await Reserve.create({
      user: user_id,
      house: house_id,
      date,
    });
    //consegue popular mais o Model Reserve com referencias dos outros models
    await reserve.populate("house").populate("user").execPopulate();

    return res.json(reserve);
  }
}

export default new ReserveController();
