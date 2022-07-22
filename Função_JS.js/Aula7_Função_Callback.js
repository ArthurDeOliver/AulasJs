//função callback

const marcas = ["audi","bmw","volvo"];

function imprimir(marca, indice){
    console.log(`${indice + 1}. ${marca}`);
}

marcas.forEach(imprimi => console.log(imprimi)) // PARA CADA ÍNDICE DO VETOR MARCAS, ELE IRÁ APLICAR A FUNÇÃO IMPRIMIR

//USANDO O CALLBACK MAIS UMA VEZ

//CRIANDO ARRAY DE NOTAS
const  notas = [7.8,3.6,2.6,5.1,9.0];
//FUNÇÃO ARROW, QUE RETORNA AS NOTAS MENORES QUE 7
const notasmenorque7 = notas => notas < 7
//NOTAS BAIXAS -> UM ARRAY QUE RECEBE O FILTRO DA FUNÇÃO ARRAY, É VERDADEIRO? ENTÃO COLOCAR NO ARRAY NOTASBAIXAS
const notasbaixas = notas.filter(notasmenorque7);
//NOTASBAIXAS MOSTRADOS NO CONSOLE.LOG
console.log(notasbaixas);