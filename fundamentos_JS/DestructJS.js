//PRÁTICAS DE DESTRUCT
//COMO ACESSAR ELEMENTOS DE UM OBJETO E ARRAY DE MANEIRA FÁCIL?

const dados = {
    nome: "arthur",
    idade: 22,
    endereco: {
        logradouro: "Olinda",
        numero:"61",
    },
    gostaDeChocolate: true
}

//SELECIONANDO ELEMENTOS DO OBJETO

const {nome, gostaDeChocolate} = dados; //SINTAXE: Retire NOME e GOSTADECHOCOLATE de dados e faça 2 variáveis com 
//esse nome

console.log(nome, gostaDeChocolate);//com as variáveis setadas agora mostrar no console.log();

const {nome: n, gostaDeChocolate: gosto} = dados; //SINTAXE: EXTRAIA NOME e GOSTADECHOCOLATE de dados e faça 2 variáveis 
//cujo nomes serão " n " e " gosto "

console.log(n, gosto);//com as variáveis setadas agora mostrar no console.log();

//ARRAY 

const [b] = [10];
const [n1,n3,n5,n6 = 0] = [10,3,5,2]
console.log(n1,n3,n5,n6);