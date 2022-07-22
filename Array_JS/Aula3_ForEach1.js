//Foreach é uma função que permite percorrer elementos de um array, possui 3 parêmetros: o nome do elemento, o índice
// e o próprio array

const aprovados = ['arthur','angelo','está','sozinho']

//a função forEach possuiu um ciclo for dentro do array
aprovados.forEach(function(nome, indice, a){
    console.log(`${indice + 1}) ${nome}`)
    console.log(a)
})

//colocando uma função arrow dentro do foreach
exibir = (nome, indice) => console.log(`${indice + 1}) ${nome}`)
aprovados.forEach(exibir) //pode-se escrever dentro do foreach a função toda