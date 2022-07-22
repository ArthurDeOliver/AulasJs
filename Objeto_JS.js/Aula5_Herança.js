//criando uma cadeia de protótipos
//protótipos é uma propriedade que associa um dado de um objeto a outro
//como sendo uma lógica de pai e filho, o filho herda características do pai

//NÃO FAÇA ISSO
Object.prototype.atributo0 = "atributo zero" 
const avo = { atributo1 : "A"}//objeto no topo da cadeia da herança
const pai = {__proto__: avo, atributo2 : "B", atributo3: "3"}//pai tem atributos associado a avo por __proto__:avo
const filho = {__proto__:pai, atributo3: "C"} //filho tem atributos associado a seu pai por __proto__: pai

console.log(filho.atributo1, filho.atributo2, filho.atributo3, filho.atributo0) //filho herda 
console.log(filho)
console.log(pai)

const carro = {
  
    velocidadeAtual: 0,
    velocidadeMax: 200,
    acelerar(delta){

        if(this.velocidadeAtual + delta <= this.velocidadeMax){
            this.velocidadeAtual += delta

        }else {
            this.velocidadeAtual = this.velocidadeMax
        }
    },

    estado(){
        return `modelo : ${this.modelo} velocidade atual: ${this.velocidadeAtual} KM/h`
    }
}

const audi = {
    modelo: "A403",
    velocidadeMax: 300,
    estado(){
        return `modelo do audi é:${this.modelo} ${super.estado()}`
        //                       super se refere a uma função de mesmo nome porém fora do escopo do objeto
        //                      isso acontece para não executar a mesma função
    }
}

const ferrari = {
    modelo: "F400",
    velocidadeMax: 634 //sobreescreve o atributo de carro para definir uma característica prórpria do objeto ferrari
    //como há uma herança do Objeto carro para ferrari é como se tivesse os seus atributos "invisíveis"
    /*

    estado(){
    return `modelo : ${this.modelo} velocidade atual: ${this.velocidadeAtual} KM/h`
    } 

    acelerar(delta){

        if(this.velocidadeAtual + delta <= this.velocidadeMax){
            this.velocidadeAtual += delta

        }else {
            this.velocidadeAtual = this.velocidadeMax
        }
    },

    */
}


//função que associa os protótipos 
//ferrari tem atributos herdados de carro, 
//                     filho    pai
Object.setPrototypeOf(ferrari, carro) //ferrari tem como protótipo carro
Object.setPrototypeOf(audi, carro)

ferrari.acelerar(800)
console.log(ferrari.estado())

audi.acelerar(20)
console.log(audi.estado())