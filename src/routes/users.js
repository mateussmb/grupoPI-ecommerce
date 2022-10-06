const express = require('express');
const usuarioController = require('../controllers/userController');
const router = express.Router();

/* GET users listing. 
router.get('/', (req, res) => {
  res.send('respond with a resource');
});
*/
router.get('/',usuarioController.adicionarUsuario);


module.exports = router;
