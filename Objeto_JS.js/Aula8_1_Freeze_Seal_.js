//COMO FAZER UM OBJETO NÃO RECEBER MAIS ATRIBUTOS?
//  preventextensions é uma função que quando usada permite que o objeto possa ter seus atributos excluídos
// modificados mas não pode incrementar novos atributos
const objeto1 = Object.preventExtensions({
    nome: "Arthur", idade: 22, gostaDeChocolate : true
})

console.log(Object.isExtensible(objeto1))//função q retorna true se o objeto é extensível

objeto1.nome = "Angelo"
delete objeto1.gostaDeChocolate
objeto1.verfilme = "sim"

console.log(objeto1)

//PORÉM, NÃO QUERO QUE EXCLUA OS ATRIBUTOS E NEM INCREMENTAR, COMO FAZER?
//função seal sela o objeto, permitindo apenas a mudança de seus atributos

const objeto2 = { nome: "ana", idade: 21, curtefilme: true}
Object.seal(objeto2) //selado o objeto2

objeto2.nome = "asdiasod"
objeto2.idade = 823917
delete objeto2.curtefilme
objeto2.chocolate = "gosta"

console.log(objeto2)

//OBJETO QUE NÃO PODE SER MODIFICADO, INCREMENTAR E NEM EXCLUIR
const objeto3 = {nome: "Cesar", idade : 28, curtefilme: true}
Object.freeze(objeto3)//"paralisa" o objeto

objeto3.nome = "asdiasod"
objeto3.idade = 823917
delete objeto3.curtefilme
objeto2.chocolate = "gosta"

console.log(objeto3)