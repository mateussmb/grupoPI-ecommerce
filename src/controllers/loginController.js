const loginController = {
    index:(req,res) =>{        
        res.render("./pages/login")
    }
}
//testando login
module.exports = loginController


/*const {createMenuObject} = require('../helpers/createMenuObject')

const login = (req, res) => {
    res.render ('pages/login')
}


const checkout = (req, res) => {
    res.render ('pages/checkout', {
    menu: createMenuObject('false')})

}


const cadastro = (req, res) => {
    res.render('pages/login-cadastro',{
       menu: createMenuObject('false'),
    })
}


module.exports.login = login
module.exports.cadastro = cadastro
module.exports.checkout = checkout 

*/