const CidadeModel = require('../model/CidadeModel');

class CidadeController {
    async create(req, res) {
        try {
            const cidade = await CidadeModel.create(req.body);
            return res.status(201).json(cidade);
        } catch (error) {
            return res.status(500).json({
                erro: 'Erro ao criar cidade', message: error.message
            });
        }
    }

    async all(req, res) {
        try {
            const cidades = await CidadeModel.findAll({
                order: [['nome', 'ASC']]
            });
            return res.status(200).json(cidades);
        } catch (err) {
            return res.status(500).json({
                erro: 'Erro ao buscar cidade',
                message: err.message
            })
        }
    }

    async update(req, res) {
        const { id } = req.params;

        try {
            const [updated] = await CidadeModel
                .update(req.body, { where: { id } });

            if (updated) {
                const updatedCity = await CidadeModel
                    .findByPk(id);
                return res.status(200).json(updatedCity);
            }
        } catch (err) {
            return res.status(500)
                .json({
                    erro: 'Erro ao buscar cidade',
                    message: err.message
                });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const deleted = await CidadeModel
                .destroy({ where: { id } });

            if (deleted) {
                return res.status(204).send()
            }
            return res.status(404)
                .json({error: 'Cidade não encontrada'});
        } catch {
            return res.status(500)
                .json({error: 'Erro ao excluir cidade',
                    message: err.message
                });
        }
    }
}

module.exports = new CidadeController;