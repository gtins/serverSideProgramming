const prompt = require('prompt-sync')()

function perguntar(){
    var pessoas = 4;
    for(let i = 0; i < pessoas; i++){
        var usuario = {};
        usuario.idade = prompt('Qual sua idade? ');
        usuario.cidade = prompt('Qual sua cidade? ');
        usuario.score = prompt('Qual sua opinião sobre França e o Labirinto? ');

    return {usuario};
    }
}
perguntar();

module.exports = perguntar();