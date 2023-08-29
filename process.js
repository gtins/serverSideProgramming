const dinheiro = require('./entrada');

function brainstorm(){

    if(dinheiro.salario > 2500){
        let imposto = (dinheiro.salario*0.11);
        let inss = (dinheiro.salario*0.08);
        return {imposto, inss};
    } else {
        let imposto = (dinheiro.salario*0.11);
        let inss = (dinheiro.salario*0.05);
        return {imposto, inss};
    }
}

module.exports = {brainstorm};