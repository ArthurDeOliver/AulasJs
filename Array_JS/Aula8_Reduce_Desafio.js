//Usando a função Reduce fazer os desafios a seguir:

const integrantes = [
    {nome: "João", nota: 7.3, bolsista: false },
    {nome: "Maria", nota: 9.2, bolsista: true },
    {nome: "Pedro", nota: 9.8, bolsista: false },
    {nome: "Ana", nota: 8.7, bolsista: true }
]

//Desafio 1: Todos são bolsistas?
const TodosBolsistas = (ValorAtual, bolsista) => ValorAtual && bolsista //reduce acumula valores ValorAtual = ValorAtual && bolsista

const Resultado1 = integrantes.map(a => a.bolsista).reduce(TodosBolsistas)
console.log(Resultado1)

//Desafio 2: Algum aluno é bolsista?
const AlgumBolsista = (acumulador,bolsista) => acumulador || bolsista

const Resultado2 = integrantes.map(a => a.bolsista).reduce(AlgumBolsista)
console.log(Resultado2)