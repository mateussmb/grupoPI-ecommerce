
const fs = require('fs');
const {v4} = require('uuid');

let dbProdutos = require('../database/bdProdutos.json');


const writeToDB = () => {
    const json = JSON.stringify(dbProdutos);
    fs.writeFileSync('/database/dbProdutos', json);
}

const Produto = {
    findAll:() => dbProdutos.produtos,

    create:(regProdutos) =>{
        dbProdutos.produtos.push({id: v4(), ...regProdutos });
        writeToDB();
    },
    delete:(id) => {
        const produtoIndex = bdProdutos.produtos.findIndex(regProdutos => produtos.id===id);
        bdProdutos.produtos[produtoIndex] = {id , ... produto};
    }
}

module.exports = Produto; 