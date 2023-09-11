//modulo definicoes
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


//modulo processamento
for(let i = 0; i < pessoas; i++){
    var usuario = {};
    usuario.idade = prompt('Qual sua idade? ');
    usuario.cidade = prompt('Qual sua cidade? JOINVILLE, CURITIBA ou ITAPOA?');
    usuario.score = prompt('Qual sua opinião sobre França e o Labirinto? OTIMO, BOM ou REGULAR?');

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

//modulo 1: porcentagens
var porcentagemOtimos = (otimos / pessoas) * 100;
var porcentagemBons = (bons / pessoas) * 100;
var porcentagemRegulares = (regulares / pessoas) * 100;

//modulo 2: contagem de leitores regulares
console.log(regulares);

//modulo 3: média idades otimo
var mediaIdadesOtimos = 0;
var idadesOtimos = 0;
var cont = 0;
for (let i = 0; i < usuarios.length; i++){
    if (usuarios[i].score.toLowerCase() === 'otimo'){
    idadesOtimos += parseInt(usuarios[i].idade); //parse int?
    cont++;
    }
}

mediaIdadesOtimos = (idadesOtimos / cont);
console.log(mediaIdadesOtimos);


//modulo 4: a porcentagem de leitores para cada cidade.
var cidades = [];
for (let i = 0; i < usuarios.length; i++){
    cidades[i] = usuarios[i].cidade;
}
console.log(cidades);

function cidadePorcentagem(cidades) {
  const cityCount = {}; 

  const totalCidades = cidades.length;

  for (const city of cidades) {
    if (cityCount[city]) {
      cityCount[city]++;
    } else {
      cityCount[city] = 1;
    }
  }

  for (const city in cityCount) {
    const porcentagem = (cityCount[city] / totalCidades) * 100;
    console.log(`${city}: ${porcentagem.toFixed(2)}%`);
  }
}
cidadePorcentagem(cidades);



