var prompt = require('prompt-sync')();
//--------------//
var opiniao = 0;
var usuarios = [];
//---------------//
var otimos = 0;
var regulares = 0;
var bons = 0;
// os contadores de opiniao sao globais e não por usuario, o usuairo faz UMA unica avaliaçao.
//---------------//
var pessoas = 4;

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

      usuarios.push(usuario);
}

//console.log(opiniao);

//verificaçao de avaliaçao media
if((opiniao/15) >= 2.5){
    //console.log("O povo acha otimo");
} else if ((opiniao/15) >= 1.8 && (opiniao/15) < 2.5){
    //console.log("O povo acha bom");
} else {
    //console.log("O povo acha maomeno");
}

// verificaçao de porcentagem//
var porcentagemBons = (bons / pessoas) * 100
//console.log(porcentagemBons);

//media das idades de quem falou otimo
var mediaIdadesOtimos = 0;
var idadesOtimos = 0;
for (let i = 0; i < usuarios.length; i++){
    if (usuarios[i].score.toLowerCase() === 'otimo')
    idadesOtimos += parseInt(usuarios[i].idade); //parse int?
}

mediaIdadesOtimos = (idadesOtimos / usuarios.length);
console.log(mediaIdadesOtimos);