const usuario = require('./entrada_dados');

function processar(){
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

    usuarios.push(usuario);
    return {opiniao, bons};
}
processar();

// function bons(){
//     var porcentagemBons = (bons / pessoas) * 100
//     return porcentagemBons;
// }

// function mediaOtimos(){
//     var mediaIdadesOtimos = 0;
//     var idadesOtimos = 0;
//     var cont = 0;
//     for (let i = 0; i < usuarios.length; i++){
//         if (usuarios[i].score.toLowerCase() === 'otimo'){
//             idadesOtimos += parseInt(usuarios[i].idade); //parse int?
//             cont++;
//         }
//     }
//     mediaIdadesOtimos = (idadesOtimos / cont);
//     //console.log(mediaIdadesOtimos);
//     return mediaIdadesOtimos;
// }