const prompt = require('prompt-sync')();

function defineAno(){
    const ano = prompt('Insira um ano: ')
    return ano;
}

module.exports = {defineAno};