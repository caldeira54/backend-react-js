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

    async all(req, res) {
        try {
            const pessoas = await PessoaModel.findAll({
                order: [['nome', 'ASC']]
            });
            return res.status(200).json(pessoas);
        } catch (err) {
            return res.status(500).json({
                erro: 'Erro ao buscar pessoas',
                message: err.message
            });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        try {
            const [updated] = await PessoaModel
                .update(req.body, { where: { id } });
            if (updated) {
                const updatedPessoa = await PessoaModel
                    .findByPk(id);
                return res.status(200).json(updatedPessoa);
            }
            return res.status(404).json({
                error: 'Cidade não encontrada'
            });
        } catch (err) {
            return res.status(500).json({
                error: 'Erro ao atualizar cidade',
                message: err.message
            });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const deleted = await PessoaModel
                .destroy({ where: { id } });

            if (deleted) {
                return res.status(204).send();
            }

            return res.status(404)
                .json({error: 'Pessoa não encontrada'});
        } catch(err) {
            return res.status(500)
                .json({error: 'Erro ao excluir pessoa',
                    message: err.message
                })
        }
    }
}

module.exports = new PessoaController;