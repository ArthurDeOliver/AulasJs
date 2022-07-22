//UTILIZAR O "LET" PARA CRIAR DENTRO DE UM CICLO POIS SEU ESCOPO SERÁ APENAS DENTRO DA FUNÇÃO.

for (let i = 1; i <= 10; i++){
    console.log(`Número gerado = ${i}`);
}

//ACESSAR OS ELEMENTOS DE UM ARRAY
const notas =  [6.7, 7.8, 4.6, 9.6]
for(let i = 0; i < notas.length; i++){
    console.log(`notas = ${notas[i]}`);

}

const dados = {
    nome: "arthur",
    idade: 22,
    gostaDeStarWars: true,
 
}

//ESTRUTURA FOR IN 
for(let qualquerNome in dados){ //CRIADA O ÍNDICE COM QUALQUER NOME IN DADOS O OBJETO

    console.log(`${qualquerNome} ${dados[qualquerNome]}`) //A CADA CICLO ELE VAI SELECIONAR EM ORDEM O NOME DOS
//ATRIBUTOS DO OBJETO, IMPRIMIR E DEPOIS NESSE MESMO ATRIBUTO VAI IMPRIMIR O DADO DESSE ATRIBUTO 
}