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

    async all (req, res) {
        try {
            const cidades = await CidadeModel.findAll({
                order: [['nome', 'ASC']]
            });
            return res.status(200).json(cidades);
        } catch (err) {
            return res.status(500).json({erro: 'Erro ao buscar cidade', 
                message: err.message})
        }
    }
}

module.exports = new CidadeController;