//Criando um objeto com função construtora

function criandoObjeto(nome, idade, gosto){
    this.nome = nome
    this.idade = idade

//       não usar o this. como parâmetro da função

    this.definirGosto = (gosto) => {
        if(gosto == true){
            comprar = "Compre"
        } else {
            comprar = "Não Compre"
        }
        return comprar
    } 
 
}
//          criar uma nova instância da função construtora de objeto NEW
const obj1 = new criandoObjeto("arthur", 15, true)
const obj2 = new criandoObjeto("césar", 21, false)
console.log(obj1, obj2)
console.log(obj1.definirGosto(true), obj2.definirGosto(false))

