// métodos : index, show, update , store, destroy
/*
index:listagem de sessões
store : criar uma nova sessão (login)
show: listar uma única sessão
update : atualizar alguma sessão
destroy: deletar uma sessão
*/
import House from "../models/House";
import User from "../models/User";

class HouseController {
  constructor() {}

  async index(req, res) {
    const { status } = req.query;

    const houses = await House.find({ status });
    return res.json(houses);
  }

  async store(req, res) {
    const { filename } = req.file;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    const house = await House.create({
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status,
    });

    return res.json(house);
  }

  async update(req, res) {
    const { filename } = req.file;
    const { house_id } = req.params;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);

    if (String(user._id) !== String(houses.user)) {
      return res.status(401).json({ error: "user not authorized." });
    }

    const queryUpdated = { _id: house_id };
    const updateData = {
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status,
    };
    await House.updateOne(queryUpdated, updateData);
    return res.json({ message: "register updated" });
  }

  async destroy(req, res) {
    const { status } = req.query;
    const { house_id } = req.params;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);
    if (String(user._id) !== String(houses.user)) {
      return res.status(401).json({ error: "user not authorized." });
    }

    const queryDeleted = { _id: house_id };
    await House.findByIdAndDelete(queryDeleted);
    return res.json({ message: "register deleted" });
  }
}

export default new HouseController();
