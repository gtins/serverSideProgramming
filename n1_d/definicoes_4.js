const prompt = require('prompt-sync')();

function pedido(){
    let carne = prompt('Digite o tipo de carne desejada: File Duplo, Alcatra, Picanha... ')
    let peso = parseFloat(prompt('Digite o peso desejado em KG: '));
    let pagamento = prompt('Qual será a forma de pagamento? Cartão ou Dinheiro? ')
    return {carne, peso, pagamento}
}

module.exports = {pedido};