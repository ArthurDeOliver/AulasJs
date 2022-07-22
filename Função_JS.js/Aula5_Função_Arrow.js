//FUNÇÃO ARROW SINTAXE
//CRIAÇÃO DE FUNÇÃO COM UMA ÚNICA LINHA
dobro = (a) => {return 2 * a}

console.log(dobro(Math.PI));

//criação de um arrow function executando mais de 1 linha de código
const multiplicacao = (a,b) => { //PODE SER CRIADO SEM O CONST
    let resultado;
    resultado = a * b;

    if(resultado > 10){
        console.log(`Ativou o if, ativou mais de 2 linhas de código, resultado: ${resultado}`);
    }
}

multiplicacao(7,4);