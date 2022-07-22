const pessoa = {
    nome: "Arthur",
    idade: 22,
    peso: 71,
}

//COMO OBJECT É UM PAR CHAVE - VALOR ESSAS FUNÇÕES MOSTRAM:
console.log(Object.keys(pessoa)) //CHAVE DO OBJETO
console.log(Object.values(pessoa)) //VALOR DO OBJETO
console.log(Object.entries(pessoa)) //TRANSFORMA DO OBJETO EM UMA MATRIZ 

//USANDO OPERADOR DESTRUCT DESUSTRUTURANDO A MATRIZ -> Object.entries(pessoa)
Object.entries(pessoa).forEach( ([chave, valor]) => {console.log(`${chave}: ${valor}`)} )
//TRANSFORMANDO EM UM MATRIZ -> Object.entries(pessoa)
//.forEach( ([chave, valor]) PERCORRENDO OS TERMOS DA MATRIZ E DEPOSITANDO EM CHAVE para a chave do objeto
// E O VALOR em valor DO OBJETO
//  => {console.log(`${chave}: ${valor}`)} ) RESTO DA OPERAÇÃO DE EXIBIR OS PARES CHAVE E VALOR 

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //vai ser listada? TRUE| para o caso FALSE: MESMO Q N PAREÇA ELE AINDA EXISTTE DENTRO DO OBJETO 
    writable: false, //vai ser modificada? FALSE
    value: "01/01/2013" //possui esse valor como sendo o padrão

})

pessoa.dataNascimento = "91/03/2103" //como não pode ser modificado, na mostragem desta chave do objeto irá retornar o valor padrão
console.log(Object.keys(pessoa))
console.log(pessoa.dataNascimento)

//object.assign 
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4} //COMO O o2 POSSUIU a, O SEU VALOR SERÁ MODIFICADO QUANDO USADA A FUNÇÃO Object.assign(dest, o1, o2)
//ESTA FUNÇÃO COLOCA OS AS CHAVES E OS VORES DOS OBJETOS o1 E o2 NO OBJETO DE DESTINO -> dest
const obj = Object.assign(dest, o1, o2) 

console.log(obj)