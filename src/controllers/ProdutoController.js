const Produto = require("../models/produtosModels");

const ProdutoController = {
    index:(req ,res) => {
        const produto = Produto.findAll();
        res.render('registroProdutos/index', {produto} );
    },

    show: (req, res) => {
        const { id } = req.params;
        const produto = Produto.findById(id);
        res.render('registroProdutos/show', { produto });
    },

    createForm:(req, res) => {
        res.render('registroProdutos/form', {
            produto : null
        });
    },

    editForm:(req, res) => {
        const {id} = req.params;
        const produto = Produto.findById(id);
        res.render('registroProdutos/form' , { produto });
    },

    create:(req, res) => {
        const produto = req.body;
        const avatar = req.file.filename;  
        const { id } = Produto.create(produto, avatar);
        res.redirect('produto')
        //res.redirect(`show/${id}`);
    },

    update:(req, res)=>{
        const {id} = req.params;
        const produto = req.body;
        const avatar = req.file.filename;

        Produto.removeAvatar(id);
        Produto.update(id , produto, avatar);

        res.redirect('/produto')
    },

    delete:(req, res) => {
        const {id} =  req.params;
        
        Produto.removeAvatar(id);
        Produto.delete(id);

        res.redirect('/produto')
    }

}

module.exports = ProdutoController;