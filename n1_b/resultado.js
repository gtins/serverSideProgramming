const lerNotas = require('./definicoes_2');
const calculo = require('./media');
const resultado = require('./processamento_2');

const notas = lerNotas.leituraNotas();
const media = calculo.calculoMedia(notas);
const classificacao = resultado.processar(notas);

console.log('Média: '+(media.toFixed(2)));
console.log('Classificação: '+classificacao);