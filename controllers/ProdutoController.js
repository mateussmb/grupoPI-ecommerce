const produtoController = {
    criarProdutos:(req ,res) => {
        //
        res.send('Criando um produto'); 
    },
    deletarProduto:(req, res) => {
        res.send('Deletand Produto')
    }
}

module.exports = produtoController;