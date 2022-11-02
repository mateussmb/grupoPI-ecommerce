// Controller responsável por gerenciar os dados do usuário
// (Ex: cadastro, atualização, exclusão)



const bcrypt = require('bcryptjs');

const User = require('../models/User')

const saltRounds = 10;

const UserController = {

    create:(req,res)=>{
    
        // Pega os dados do usuário do corpo da requisição
        const {nome,cpf, age,contact, email, password} = req.body;
        // Faz a criptografia da senha
        const hash = bcrypt.hashSync(password,saltRounds);
        // Chama a model para criar um novo usuário
        // Passando o email e a senha criptografada
        User.create({nome,cpf,age,contact,email, password: hash});
        // Redireciona para a página de login
        return res.redirect('./pages/formCadastro')
    },

    renderFormCadastro:(req, res)=> {
        // Verifica se o usuário está logado
        // Ou seja, se existe uma sessão para o usuário
        if(req.session.user != undefined){
            // Se estiver logado, redireciona para a página restrita
            return res.redirect('./pages/profile') //restrito
        };
         // Renderiza a página de cadastro de usuário
        return res.render('./pages/formCadastro');
    }
};

module.exports = UserController;