/*const fs = require('fs');
const {v4} = require('uuid');

let dbProdutos = require('../database/bdProdutos.json');


const writeToDB = () => {
    const json = JSON.stringify(dbProdutos);
    fs.writeFileSync('/database/dbProdutos', json);
}

const Produto = {
    findAll:() => dbProdutos.produtos,

    create:(produto) =>{
        dbProdutos.produtos.push({id: v4(), ...produto });
        writeToDB();
    },
    delete:(id) => {

    }
}

module.exports = Produto; */