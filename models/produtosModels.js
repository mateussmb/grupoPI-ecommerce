
const fs = require('fs');
const {v4} = require('uuid');

let bancoProdutos = require('../database/bancoProdutos.json');


const writeToDB = () => {
    const json = JSON.stringify(bancoProdutos);
    fs.writeFileSync('database/bancoProdutos.json', json);
}

const Produto = {
   findAll:() => bancoProdutos.produtos,

    create:(name,avatar) =>{
        bancoProdutos.produtos.push({ id : v4(), ...name, avatar });
        writeToDB();
    },
    delete:() =>{

    }
}

module.exports = Produto; 