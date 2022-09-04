const produtoController = {
    index:(req ,res) => {
        // renderizando inicio da Page Produto.
        res.render('regProdutos/index');
    },

    createForm:(req, res) =>{
        //renderizando formulario cadastro de produtos
        res.render('reqProdutos/form');
    },
        
}

module.exports = produtoController;