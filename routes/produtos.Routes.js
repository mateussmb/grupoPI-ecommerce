const express = require('express')
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/upload');

const ProdutoController = require('../controllers/ProdutoController');
 //Inicialização do multer com as configuração do storage
const upload = multer({storage});
//===================================================================
//*Rota para listar todos os produtos
//===================================================================
router.get('/',ProdutoController.index);
//===================================================================
//*Rota para mostrar formulario de cadastro de produto
//===================================================================
router.get('/create',ProdutoController.createForm);
//===================================================================
//*Rota para cria produto
//===================================================================
router.post('/', upload.single('imagemProd'),ProdutoController.create);


module.exports = router;