const express = require('express')
const router = express.Router();

const produtoController = require('../controllers/ProdutoController');

router.get('/',produtoController.produtos);

router.get('/create', produtoController.createForm);




module.exports = router;