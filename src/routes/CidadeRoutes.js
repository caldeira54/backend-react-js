const express = require('express');
const router = express.Router();

const CidadeController = require('../controller/CidadeController');

router.post('/', CidadeController.create);

module.exports = router;