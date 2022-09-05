const express = require('express')
const router = express.Router();

const ProdutoController = require('../controllers/ProdutoController');
//===================================================================
//*Rota para listar todos os produtos
//===================================================================
router.get('/',ProdutoController.index);
//===================================================================
//*Rota para mostrar formulario de cadastro de produto
//===================================================================
router.get('/create',ProdutoController.create);
module.exports = router;