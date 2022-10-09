const express = require('express');

//importando os controllers
const userController = require('../controllers/userController');

const router = express.Router();

//rota para visualizar cadastro
router.get('/',userController.viewCadastro);

//rota para cadastrar um usuario
router.post('/',userController.salvarCadastro);
module.exports = router;