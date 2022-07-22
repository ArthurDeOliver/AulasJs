//criando funções

//criando função de forma literal
function soma(a,b){
    console.log("função soma primeiro");
    return (a + b); // função retorna o valor da soma
}
//          chamada da função com os parâmetros
console.log(soma(5,4));

const func = function multiplicacao(a,b){
    console.log("função func segundo");

    return (a * b);
}

console.log(func(7,3));

function divisão(a,b){
    console.log("função divisão terceiro");
    return (a / b);
}

const array = [soma(1,1), func(7,3), divisão(8,4)]; //criando o array e chamando as funções e executando suas
//sentenças

console.log(array);

//UMA FUNÇÃO QUE RETORNA UMA FUNÇÃO
function funçãoDentroDaOutra(a,b){
    return function(c){
        return console.log(a+b+c);
    }
}


//retorno de um objeto, para retornar vários valores de uma vez
function pessoal(remedio, dinheiro, doente){

    const comprarRemedio = dinheiro && doente;
    const beberRemedio = remedio || doente;
    const naoBeberRemedio = remedio != doente;

    return { comprarRemedio, beberRemedio, naoBeberRemedio }
}

console.log(pessoal(true,false,true));

const depositarFunçãoDentroDaVariável1 = array;// depositar um array de funções em uma variável
const depositarFunçãoDentroDaVariável2 = soma(2,5); //função retorna um número, despositar o retorno de uma função
//em uma variável

console.log(depositarFunçãoDentroDaVariável2);
console.log(depositarFunçãoDentroDaVariável1);
//                 PARÂMETROS DA PRIMEIRA FUNÇÃO
funçãoDentroDaOutra(1,2)(0);
//                       PARÂMETROS DA SEGUNDA FUNÇÃO, A DO RETORNO