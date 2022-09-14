
const fs = require('fs');
const {v4} = require('uuid');

let bancoProdutos = require('../database/bancoProdutos.json');


const writeToDB = () => {
    const json = JSON.stringify(bancoProdutos);
    fs.writeFileSync('/database/bancoProdutos', json);
}

const Produto = {
    findAll:() => bancoProdutos.produtos,

    create:(registroProdutos, avatar) =>{
        bancoProdutos.produtos.push({id: v4(), ...registroProdutos, avatar });
        writeToDB();
    },
    delete:(id) => {
        const produtoIndex = bancoProdutos.produtos.findIndex(registroProdutos => produtos.id===id);
        bancoProdutos.produtos[produtoIndex] = {id , ... produto};
    }
}

module.exports = Produto; 