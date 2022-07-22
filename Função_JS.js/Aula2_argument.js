function soma(){
    let soma = 0;

    for(i in arguments){ //arguments é um vetor dos argumentos/parâmetros da função
        soma += arguments[i];
    }
    return soma;
}

//PODEMOS COLOCAR VÁRIOS E VÁRIOS ARGUMENTOS DENTRO DA FUNÇÃO E ELA FUNCIONARÁ POR CAUSA DO VETOR ARGUMENTS
console.log(soma(1,2,3,4,5));
