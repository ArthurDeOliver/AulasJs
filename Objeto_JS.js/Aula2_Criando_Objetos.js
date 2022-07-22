//USANDO A NOTAÇÃO LITERAL

const obj1 = {}
//console.log(obj1)

//OBJECT 
const obj2 = new Object
//console.log(obj2)

//NÃO CRIAR FUNÇÃO ARROW PARA CRIAR OBJETOS PELO MÉTODO DE FUNÇÃO CONSTRUTORAS
/*produto = (nome, preco, desc) => {
    this.nome = nome //THIS TORNA POSSÍVEL A ALTERAÇÃO DE NOME FORA DO ESCOPO DA FUNÇÃO DE MANEIRA GLOBAL
    this.PrecoComDesconto = () => { //THIS -> ATRIBUTO VISÍVEL PÚBLICO 
        return preco * (1 - desc)
    }
}*/

//função contrutoras CORRETA
function produto(nome, preco, desc){ //PREÇO NÃO É UM PARÂMETRO QUE PODE SER TIRADO DO ESCOPO DA FUNÇÃO CONSTRUTORA

    this.nome = nome //THIS TORNA POSSÍVEL A ALTERAÇÃO DE NOME FORA DO ESCOPO DA FUNÇÃO DE MANEIRA GLOBAL

    this.PrecoComDesconto = () => { //THIS -> ATRIBUTO VISÍVEL (PÚBLICO)
        return preco * (1 - desc)
    }
}

//const p1 = new produto("caneca", 9.50, 0.5) //CRIANDO NOVAS INSTÂNCIAS DA FUNÇÃO PRODUTO
//const p2 = new produto("estojo", 20, 0.4)
//console.log(p1.PrecoComDesconto(), p2.PrecoComDesconto())

//CRIAÇÃO DE OBJETO ATRAVÉS DE FUNÇÃO FACTORY 
//RECOMENDADA!!!
//função arrow como função factory
const criandoObjeto = (nome, idade, logradouro, numero) => {
    return {
        nome,
        idade,
        endereco : {
            logradouro,
            numero
        },
        //FUNÇÃO DENTRO DE UM OBJETO
        salario(){
            return idade * 20
        } 
    }
}//RETORNA UM OBJETO A VARIÁVEL ASSOCIADA A ESSA FUNÇÃO SE TORNA UM OBJETO

//CRIANDO OBEJTOS APARTIR DA FUNÇÃO FACTORY 
const pessoa1 = criandoObjeto("Arthur",22,"Olinda", "909")
//A VARIÁVEL É AQUILO QUE A FUNÇÃO RETORNA, SE A FUNÇÃO RETORNA UM OBJETO, A VARIÁVEL É UM OBJETO!  

console.log(pessoa1);//ACESSANDO O OBJETO

console.log(pessoa1.salario());//ACESSANDO A FUNÇÃO DENTRO DO OBJETO

const fromJson = JSON.parse('{"In1fo": "sou um JAISON"}') //JSON É UM ARQUIVO TEXTUAL QUE É CONVERTIDO PARA UM OBJETO
console.log(fromJson.Info)

//JSON - Javascript object notation - É UM TEXTO