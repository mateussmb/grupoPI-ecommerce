
const fs = require('fs');
const { v4 } = require('uuid');

const { dirname } = require("path")
const appDirectory = dirname(require.main.filename)

let bancoProdutos = require('../database/db.json');

const { uploadPath } = require('../settings/upload.js');

const writeToDB = () => {
    const json = JSON.stringify(bancoProdutos);
    fs.writeFileSync(`${appDirectory}/../database/bancoProdutos.json`, json);
}

// Estudar sobre estrutura de repositories com banco de dados

const Produto = {
    findAll:() => bancoProdutos.produtos,

    findById:(id) => {
        const produto = bancoProdutos.produtos.find(produto => produto.id ===id);
        return produto;
    },

    findByCategoria:(categoria) =>{
        const produtos = bancoProdutos.produtos.filter(produto => produto.categoria === categoria)
        return produtos
    },

    removeAvatar:() =>{
        const produto = bancoProdutos.produtos.find(produto => produto.id === id)
        fs.unlinkSync(
            `${uploadPath}/${produto, avatar}`
        );
    },
    
    create:(produto, avatar) =>{
        const createdProduct = {id: v4(), ...produto, avatar };
        bancoProdutos.produtos.push(createdProduct);
        writeToDB();
        return createdProduct;
    },

    update:(id, produto, avatar)=>{
        const produtoIndex = bancoProdutos.produtos.produtoIndex(produto => produto.id === id);
        bancoProdutos.produtos[produtoIndex] = {id, ...produto, avatar};
        writeToDB 
    },
    delete:(id) => {
        const produtoIndex = bancoProdutos.produtos.findIndex(produto => produto.id===id);
        bancoProdutos.produtos.splice(produtoIndex, 1);
        writeToDB
    }
}

module.exports = Produto; 