const express = require('express');
const router = express.Router();

const PessoaController = require('../controller/PessoaController');

router.post('/', PessoaController.create);
router.get('/all', PessoaController.all);
router.put('/:id', PessoaController.update);
router.delete('/:id', PessoaController.delete);

module.exports = router;