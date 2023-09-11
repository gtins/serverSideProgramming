const prompt = require('prompt-sync')();

//notas dos exames
const notas = [];
for (let i = 1; i <= 5; i++) {
  const nota = parseFloat(prompt('Digite a nota do exame '+i+ ': '));
  notas.push(nota);
}

//média
const media = ((notas[0] + notas[1] + notas[2] + notas[3] + notas[5]) / 5);

//processamento
if (notas[0] >= 70 &&
    notas[1] >= 70 &&
    notas[2] >= 70 &&
    notas[3] >= 70 &&
    notas[4] >= 70){
    console.log('Classificação: A - Passou em todos os exames');
} else if (
  notas[0] >= 70 &&
  notas[1] >= 70 &&
  notas[3] >= 70 &&
  (notas[2] < 70 || notas[4] < 70)
) {
  console.log('Classificação: B - Passou em I, II e IV, mas não em III ou V');
} else if (
  (notas[0] >= 70 && notas[1] >= 70 && notas[4] < 70) ||
  (notas[0] >= 70 && notas[2] >= 70 && notas[4] < 70) ||
  (notas[0] >= 70 && notas[3] >= 70 && notas[4] < 70) ||
  (notas[1] >= 70 && notas[2] >= 70 && notas[4] < 70) ||
  (notas[1] >= 70 && notas[3] >= 70 && notas[4] < 70) ||
  (notas[2] >= 70 && notas[3] >= 70 && notas[4] < 70)
) {
  console.log('Classificação: C - Passou em I e II, III ou IV, mas não em V');
} else {
  console.log('Classificação: Reprovado');
}
