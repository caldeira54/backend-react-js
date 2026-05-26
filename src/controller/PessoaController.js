const PessoaModel = require('../model/PessoaModel');

class PessoaController {
    async create(req, res) {
        try {
            const pessoa = await PessoaModel.create(req.body);
            return res.status(201).json(pessoa);
        } catch (err) {
            return res.status(500)
                .json({
                    erro: 'Erro ao criar pessoa',
                    message: err.message
                });
        }
    }
}

module.exports = new PessoaController;