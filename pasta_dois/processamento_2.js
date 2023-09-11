function processar(notas){
    if (notas[0] >= 70 &&
        notas[1] >= 70 &&
        notas[2] >= 70 &&
        notas[3] >= 70 &&
        notas[4] >= 70){
        return 'A - Passou em todos os exames';
    } else if (
      notas[0] >= 70 &&
      notas[1] >= 70 &&
      notas[3] >= 70 &&
      (notas[2] < 70 || notas[4] < 70)
    ) {
        return 'B - Passou em I, II e IV, mas não em III ou V';
    } else if (
      (notas[0] >= 70 && notas[1] >= 70 && notas[4] < 70) ||
      (notas[0] >= 70 && notas[2] >= 70 && notas[4] < 70) ||
      (notas[0] >= 70 && notas[3] >= 70 && notas[4] < 70) ||
      (notas[1] >= 70 && notas[2] >= 70 && notas[4] < 70) ||
      (notas[1] >= 70 && notas[3] >= 70 && notas[4] < 70) ||
      (notas[2] >= 70 && notas[3] >= 70 && notas[4] < 70)
    ) {
        return 'C - Passou em I e II, III ou IV, mas não em V';
    } else {
        return 'Reprovado';
    }
}

module.exports = {processar};