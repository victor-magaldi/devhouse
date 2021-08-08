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
    const { email } = req.body;

    let user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      // Criando um  email e nome
      user = await User.create({ email });
    }
    return res.json(user);
  }
}

export default new SessionController();
