const pedido = require('./definicoes_4');
const notinha = require('./processamento_4');

let compra = pedido.pedido();
let cupom = notinha.imprimir(compra.carne, compra.peso, compra.pagamento);

console.log('Peça da carne: '+compra.carne);
console.log('Peso da carne: '+compra.peso);
console.log('Forma de pagamento: '+compra.pagamento);
console.log('Preço total: R$'+cupom.preco)
console.log('Desconto: R$'+cupom.desconto);
console.log('Valor a pagar: R$'+cupom.precoFinal);