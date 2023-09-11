// processamento.js
const definicoes = require('./definicoes');

function processarDadosUsuario(usuario) {
  switch (usuario.score.toLowerCase()) {
    case 'otimo':
      definicoes.opiniao += 3;
      definicoes.otimos++;
      break;
    case 'bom':
      definicoes.opiniao += 2;
      definicoes.bons++;
      break;
    case 'regular':
      definicoes.opiniao += 1;
      definicoes.regulares++;
      break;
    default:
      definicoes.opiniao += 0;
  }

  definicoes.usuarios.push(usuario);
}

function calcularPorcentagens() {
  const porcentagemOtimos = (definicoes.otimos / definicoes.pessoas) * 100;
  const porcentagemBons = (definicoes.bons / definicoes.pessoas) * 100;
  const porcentagemRegulares = (definicoes.regulares / definicoes.pessoas) * 100;

  return {
    porcentagemOtimos,
    porcentagemBons,
    porcentagemRegulares,
  };
}

function retornaRegulares(){
    return definicoes.regulares;
}

function calcularMediaIdadesOtimos() {
  let mediaIdadesOtimos = 0;
  let idadesOtimos = 0;
  let cont = 0;

  for (let i = 0; i < definicoes.usuarios.length; i++) {
    if (definicoes.usuarios[i].score.toLowerCase() === 'otimo') {
      idadesOtimos += parseInt(definicoes.usuarios[i].idade);
      cont++;
    }
  }

  if (cont > 0) {
    mediaIdadesOtimos = idadesOtimos / cont;
  }

  return mediaIdadesOtimos;
}

function calcularPorcentagemCidades() {
  const cidades = definicoes.usuarios.map((usuario) => usuario.cidade);

  const cityCount = {};
  const totalCidades = cidades.length;

  for (const city of cidades) {
    if (cityCount[city]) {
      cityCount[city]++;
    } else {
      cityCount[city] = 1;
    }
  }

  const porcentagensCidades = {};

  for (const city in cityCount) {
    const porcentagem = (cityCount[city] / totalCidades) * 100;
    porcentagensCidades[city] = porcentagem.toFixed(2) + '%';
  }

  return porcentagensCidades;
}

module.exports = {
  processarDadosUsuario,
  calcularPorcentagens,
  calcularMediaIdadesOtimos,
  calcularPorcentagemCidades,
  retornaRegulares,
};
