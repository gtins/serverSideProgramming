//media
function calculoMedia(notas){
    const media = ((notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / 5);
    return media;
}

module.exports = {calculoMedia};

