const express = require('express');
const router = express.Router();

const CidadeController = require('../controller/CidadeController');

router.post('/', CidadeController.create); // Cadastrar
router.get('/all', CidadeController.all); // Listar

module.exports = router;