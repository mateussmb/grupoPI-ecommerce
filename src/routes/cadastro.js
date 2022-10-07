const express = require('express');

//importando os controllers
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/',userController.formAddUser);

module.exports = router;