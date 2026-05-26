const express = require('express');
const router = express.Router();

const PessoaController = require('../controller/PessoaController');

router.post('/', PessoaController.create);

module.exports = router;