var express = require('express');
const homeController = require('../controllers/homeController');
const pagamentoController = require('../controllers/pagamentoController');
const carrinhoController = require('../controllers/carrinhoController');
const checkoutController = require('../controllers/checkoutController');

var router = express.Router();

router.get('/', homeController.index);
router.get('/pagamento', pagamentoController.index);
router.get('/carrinho', carrinhoController.index);
router.get('/checkout', checkoutController.index);

module.exports = router;
