const Produto = require('../models/ProductModels.js')

const homeController = {
    index:(req,res) =>{
        const produtos = Produto.findAll()
        res.render("./pages/home", { produtos })
    },

    lancamentos:(req,res) =>{
        const produtos = Produto.findByCategoria('lançamentos')
        res.render("./pages/home", { produtos })
    }


}

module.exports = homeController