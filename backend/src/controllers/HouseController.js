// métodos : index, show, update , store, destroy
/*
index:listagem de sessões
store : criar uma nova sessão (login)
show: listar uma única sessão
update : atualizar alguma sessão
destroy: deletar uma sessão
*/
import House from "../models/House";

class HouseController {
  constructor() {}

  async store(req, res) {
    console.log(req.body);
    console.log(req.file);
    return res.json({ ok: true });
  }
}

export default new HouseController();
