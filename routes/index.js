var express = require('express');
const homeController = require('../controllers/homeController');
const pagamentoController = require('../controllers/pagamentoController');
const carrinhoController = require('../controllers/carrinhoController');
const checkoutController = require('../controllers/checkoutController');
const loginCadastro = require('../controllers/login-cadastro');

var router = express.Router();

router.get('/', homeController.index);
router.get('/pagamento', pagamentoController.index);
router.get('/carrinho', carrinhoController.index);
router.get('/checkout', checkoutController.index);

router.get('/login', loginCadastro.index);
router.get('/cadastro', loginCadastro.index);


module.exports = router;
