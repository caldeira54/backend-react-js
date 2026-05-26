const express = require('express');
const router = express.Router();

const CidadeController = require('../controller/CidadeController');

router.post('/', CidadeController.create); // Cadastrar
router.get('/all', CidadeController.all); // Listar
router.put('/:id', CidadeController.update); // Atualizar
router.delete('/:id', CidadeController.delete); // Deletar

module.exports = router;