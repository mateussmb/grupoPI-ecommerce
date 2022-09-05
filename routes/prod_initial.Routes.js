const express = require('express');
const router = express.Router();

//rota para renderizar tela cadastro de produto

router.get('/',(req,res) =>  res.render('cadastro'));

module.exports = router;

