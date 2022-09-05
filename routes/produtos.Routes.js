const express = require('express')
const router = express.Router();

const produtoController = require('../controllers/ProdutoController');

router.get('/',produtoController.index);

router.get('/create', produtoController.createForm);

router.post('/',produtoController.createForm);

module.exports = router;