const Produto = require("../models/produtosModels");

const ProdutoController = {
    index:(req ,res) => {
        
        res.render('regProdutos/index',);
    },
    createForm:(req, res) => {

        res.render('regProdutos/form');
    },
    create:(req, res) => {
        const produto = req.body;
        console.log(produto)
        const imagemProd = req.file.filename;
        Produto.create(produto, imagemProd);
        res.redirect('/produto');
        //req.render('regProdutos/form');
    },

}

module.exports = ProdutoController;