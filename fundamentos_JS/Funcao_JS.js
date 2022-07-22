//Criaçao de função

function ImprimirSoma(a,b){ //parametros da função
    console.log(a + b); //a função usa como os parâmetros em sentenças de código

}

ImprimirSoma(5,4); //chamda da função onde é aplicado os parâmetros

//FUNCÇÃO COM RETORNO
function multiplicao(a, b = 0){ //por definição b é igual a 0
    return a * b
}

console.log (multiplicao(1,3)); /*chamada da função com os paraâmetros,o seu retorno irá fazer a operação e 
operação irá aparecer*/

console.log (multiplicao()); //NaN

//CRIAÇÃO DE UMA VARIÁVEL QUE É UMA FUNÇÃO

//COLOCANDO UMA FUNÇÃO DENTRO DE UMA VARIÁVEL PODE SER LET, VAR OU CONST
var divisao = function (a,b){
return (a/b)
}

//COLOCANDO UMA FUNÇÃO DENTRO DE UMA VARIÁVEL DE FORMA MAIS OTIMI
const FuncaoDentroDaVariavel = (a,b) => {
return a + b
}

console.log(FuncaoDentroDaVariavel(2,4));
console.log(divisao(4,2));