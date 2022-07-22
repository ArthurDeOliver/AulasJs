//FUNÇÃO FACTORY RETORNA UM OBJETO

criarDados1 = () => {
    return { 
        nome : "arthur",
        idade: 12,
        gostaDeChocolate: true,
    }
}

//console.log(criarDados1())

//COLOCANDO DADOS EM UMA FUNÇÃO QUE RETORNA UM OBJETO
criarDados2 = (nome1, idade1, gosto = true) =>{
    return { //               //VALOR PADRÃO
        nome1,
        idade1,
        gosto, 
    }
}

console.log(criarDados2("dsalçdas",14))
console.log(criarDados2("calça",81,false)) //CRIOU ENTÃO OUTRO OBJETO 

