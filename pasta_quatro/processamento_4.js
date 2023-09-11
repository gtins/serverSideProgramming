function imprimir(carne, peso, pagamento){
    let preco = 0;
    let desconto = 0;
    let precoFinal = 0;
    if((carne.toLowerCase()) == 'file duplo' && peso <= 5){
        preco = 24.90;
    } else if((carne.toLowerCase()) == 'file duplo' && peso > 5){
        preco = 25.80;
    } else if((carne.toLowerCase()) == 'alcatra' && peso <= 5){
        preco = 25.90;
    } else if((carne.toLowerCase()) == 'alcatra' && peso > 5){
        preco = 26.80;
    } else if((carne.toLowerCase()) == 'picanha' && peso <= 5){
        preco = 36.90;
    } else if((carne.toLowerCase()) == 'picanha' && peso > 5){
        preco = 37.80;
    }
    if ((pagamento.toLowerCase() == 'cartao')){
        desconto = preco * 0.05
        precoFinal = (preco - desconto).toFixed(2);
    }
    return {preco, desconto, precoFinal};
}

module.exports = {imprimir};