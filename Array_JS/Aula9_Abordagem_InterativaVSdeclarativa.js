const alunos = [
    {nome: 'Arthur', nota: 7.2},
    {nome: 'Angelo', nota: 9.9}
]

//modo interativo
let notas = 0

for(let i = 0; i < alunos.length; i++ ){
    notas += alunos[i].nota
}

console.log(notas/alunos.length)

//modo declarativo
//mais usado pois podemos utilizar as funções notas1 e media em outras linhas durante a construção do código 
const getNotas = alunos => alunos.nota
const soma = (acumulador, valorAtual) => acumulador + valorAtual
const resultadoMedia = (alunos.map(getNotas).reduce(soma))/alunos.length
//.map() mapeia o que quero no meu array, no caso, notas
//.reduce() reduzo o código, acumulando ele em uma soma
console.log(resultadoMedia)