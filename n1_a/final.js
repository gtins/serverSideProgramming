const definicoes = require('./definicoes');
const processamento = require('./processamento');
var prompt = require('prompt-sync')();

for (let i = 0; i < definicoes.pessoas; i++) {
  var usuario = {};
  usuario.idade = prompt('Qual sua idade? ');
  usuario.cidade = prompt('Qual sua cidade? ');
  usuario.score = prompt('Qual sua opinião sobre França e o Labirinto? OTIMO, BOM ou REGULAR? ');

  processamento.processarDadosUsuario(usuario);
}

const porcentagens = processamento.calcularPorcentagens();
const mediaIdadesOtimos = processamento.calcularMediaIdadesOtimos();
const porcentagensCidades = processamento.calcularPorcentagemCidades();
const regulares = processamento.retornaRegulares();

console.log('Porcentagens de opinião:');
console.log('Ótimos: ' +porcentagens.porcentagemOtimos.toFixed(2) + '%');
console.log('Bons: ' +porcentagens.porcentagemBons.toFixed(2) + '%');
console.log('Regulares: ' +porcentagens.porcentagemRegulares.toFixed(2) + '%');
console.log('Média de idades de ótimos: ' +mediaIdadesOtimos.toFixed(2) + '%');
console.log('Porcentagens de cidades:');
console.log(porcentagensCidades);
console.log('Contagem de regulares: ' +regulares);