const prompt = require('prompt-sync')();

//notas dos exames
function leituraNotas(){
const notas = [];
for (let i = 1; i <= 5; i++) {
    const nota = parseFloat(prompt('Digite a nota do exame '+i+ ': '));
    notas.push(nota);
    }
    return notas;
}

module.exports = {leituraNotas}; 