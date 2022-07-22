const produtos = [
    '{"nome": "Caderno", "preço": 10.50}',
    '{"nome": "Lapis" , "preço": 2.75}',
    '{"nome": "Estojo", "preço": 19.99}'
]

//retornar apenas os preços

const paraObjeto = json => JSON.parse(json) //converter JSON para objeto
const mostrarPreço = p => p.preço //função que irá retornar os preços do objeto que entrar nela
//executando primeiro para converter para objeto e depois para pegar apenas o preço
let mostrarP = produtos.map(paraObjeto).map(mostrarPreço)

console.log(mostrarP)