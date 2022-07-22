const pai = {
    nome: "pedro",
    corCabelo: "preto"
}
//criação de um objeto novo tendo como pai um protótipo
const filha1 = Object.create(pai)
filha1.nome = "Ana"
//atributo herdado de pai para filha
console.log(filha1.corCabelo)
console.log(filha1)

const filha2 = Object.create(pai, {
    nome : { value: "Arthur",  //seu valor padrão
    writable: false, //pode ser reescrito? não!!!
    enumerable: true //vai ser mostrado quando chamado o objeto? sim!!! para ver a chave: Object.keys(filha2)
}
})

filha2.nome = "oliveira" //não é permitido a troca 

console.log(filha2.nome, Object.keys(filha2))