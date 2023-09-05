var prompt = require('prompt-sync')();
//--------------//
var opiniao = 0;
var usuarios = [];
//---------------//
var otimos = 0;
var regulares = 0;
var bons = 0;
//---------------//
var pessoas = 15;

for(let i = 0; i < pessoas; i++){
    var usuario = {};
    usuario.idade = prompt('Qual sua idade? ');
    usuario.cidade = prompt('Qual sua cidade? ');
    usuario.score = prompt('Qual sua opinião sobre França e o Labirinto? ');
    switch (usuario.score.toLowerCase()) {
        case 'otimo':
          opiniao += 3;
          otimos++;
          break;
        case 'bom':
          opiniao += 2;
          bons++;
          break;
        case 'regular':
          opiniao += 1;
          regulares++;
          break;
        default:
          opiniao += 0;
      }
      //if é mais eficiente??
}

console.log(opiniao);

// if((opiniao/15) >= 2.5){
//     console.log("O povo acha otimo");
// } else if ((opiniao/15) >= 1.8 && (opiniao/15) < 2.5){
//     console.log("O povo acha bom");
// } else {
//     console.log("O povo acha maomeno");
// }

// var porcentagemBons = (bons / pessoas) * 100
// console.log(porcentagemBons);