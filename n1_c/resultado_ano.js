const resultado = require('./processamento_3');
const input_ano = require('./definicoes_3');

var ano = input_ano.defineAno();
var resultadoAno = resultado.verificaAno(ano);

console.log(resultadoAno);