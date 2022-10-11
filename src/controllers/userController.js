// const { validationResult } = require('express-validator');

const userController = {
    /*
    *Renderizando para de cadastro de usuario
    */
    viewCadastro:(req, res) =>{
    res.render("pages/userRegistration")
    },
    salvarCadastro:(req, res) => {
        //validaçãa de erros
        if(!errors.insEmpty()){
            return res.render("pages/userRegistration",{errors});
        }
        if(!req.insEmpty){
            return res.send('Você deve preencher')
        }
    }

}
module.exports = userController