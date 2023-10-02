import conexao from "./db.js"

conexao.conecta.query("Select * FROM unidade_medida", function(erro, result){
    if(erro) throw erro;
    console.log(result);
})

export default {conexao}