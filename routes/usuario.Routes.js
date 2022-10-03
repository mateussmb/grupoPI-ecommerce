var express = require('express');
//const usuarioController = require('../controllers/usuarioController');
var router = express.Router();


/* GET users listing. */
router.get('/', (req, res) => res.render('pages/cadastroUsuario'));

module.exports = router;
