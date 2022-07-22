//Algumas práticas e funções de array

let nomes = ['2','1','3']

nomes.push('nome inserido com push')
console.log(nomes)

delete nomes[3]
console.log(nomes)
console.log(nomes[3])

nomes.push('nome 1','nome 2') //adicionando mais de um nome usando a função push
console.log(nomes)

nomes.sort() //ordena o array em número, ordem alfabética 
console.log(nomes)

/*
    .splice(1,1,"colocar algo") -> A função splice tem como parâmetro o valor da casa do array escolhido
depois quantos elementos vai ser excluído, e em seguida oque é colocado em seguida 
*/

//.splice(4,2,"exc...","coloc...") a partir da 4° posição do arrray, excluir 2 elementos e acrescentar "exc..." e "coloc..."
nomes.splice(5,1,"excluir e colocar usando o método splice","colocando outro elemento em seguida")
console.log(nomes)

//da posição 1, contando com ele, excluir 3 espaçõs e acresentar 'arthur' na posição 1
nomes.splice(1,3,'Arthur')
console.log(nomes)