const CidadeModel = require('../model/CidadeModel');

class CidadeController {
    async create(req, res) {
        try {
            const cidade = await  CidadeModel.create(req.body);
            return res.status(201).json(cidade);
        } catch (error) {
            return res.status(500).json({
                erro: 'Erro ao criar cidade', message: error.message
            });
        }
    }
}

module.exports = new CidadeController;