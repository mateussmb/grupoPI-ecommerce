//importando express
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const pagamentoController = require('../controllers/pagamentoController');
const carrinhoController = require('../controllers/carrinhoController');
const checkoutController = require('../controllers/checkoutController');
const authController = require ('../controllers/AuthController');
const UserController = require('../controllers/userController');



router.get('/', homeController.index);
router.get('/pagamento', pagamentoController.index);
router.get('/carrinho', carrinhoController.index);
router.get('/checkout', checkoutController.index);
router.get('/login', authController.login);
router.get('/cadastro', UserController.renderFormCadastro);
//rota para visualizar login

/* GET home page. 
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;
