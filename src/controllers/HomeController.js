class HomeController {
  index(req, res) {
    res.json({
      message: 'tudo certo'
    });
  }

  store(req, res) {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    res.json({
      nome,
      sobrenome
    });
  }
}

export default new HomeController();
