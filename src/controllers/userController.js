// Controller responsável por gerenciar os dados do usuário
// (Ex: cadastro, atualização, exclusão)

const bcrypt = require('bcryptjs');
const User = require('../models/usersModels')

const saltRounds = 10;

const UserController = {

    create:(req,res)=>{
    
        // Pega os dados do usuário do corpo da requisição
        const {email, password} = req.body;
        // Faz a criptografia da senha
        const hash = bcrypt.hashSync(password,saltRounds);
        // Chama a model para criar um novo usuário
        // Passando o email e a senha criptografada
        User.create({email, password: hash});
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
    },
    //CRIAR NOVA FUNÇÃO *CREATEUSER - CRIAR VARIÁVEL POST const { email, senha } = req.body; 
    //USAR A FUNÇÃO CREATE DO SEQUELIZE PARA CRIAR USUÁRIO NO BANCO
    //REDIRECIONAR PARA HOME
};

module.exports = UserController;