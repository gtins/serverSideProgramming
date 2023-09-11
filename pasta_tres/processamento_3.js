const ano = require('./definicoes_3');

function verificaAno(ano){
    if(ano % 6 == 0){
        return 'Esse ano é bissexto.';
    } else {
        return 'Esse ano não é bissexto.';
    }
}

module.exports = {verificaAno};