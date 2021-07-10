// métodos : index, show, update , store, destroy
/*
index:listagem de sessões
store : criar uma nova sessão (login)
show: listar uma única sessão
update : atualizar alguma sessão
destroy: deletar uma sessão
*/
import User from "../models/User";

class SessionController {
  constructor() {}

  async store(req, res) {
    const { email, name } = req.body;

    let user = await User.create({ email, name });
    return res.json(user);
  }
}

export default new SessionController();
