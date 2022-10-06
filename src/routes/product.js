const express = require('express')
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/upload');

const ProdutoController = require('../controllers/ProdutoController');
 //Inicialização do multer com as configuração do storage
const upload = multer({storage}) 

//*Rota para listar todos os produtos
router.get('/',ProdutoController.index);
//*Rota para mostrar um produto
router.get('/show/:id', ProdutoController.show);
 
//*Rota para mostrar formulario de cadastro de produto
router.get('/create',ProdutoController.createForm);

//*Rota para mostrar formulario de edição
router.get('/edit/:id',ProdutoController.editForm);

//*Rota para cria produto
router.post('/', upload.single('avatar'),ProdutoController.create);

//*Rota para atualizar um produto
router.put('/:id',upload.single('avatar'),ProdutoController.update);

//*Rota para deletar um produto
router.delete('/:id',ProdutoController.delete);


module.exports = router;