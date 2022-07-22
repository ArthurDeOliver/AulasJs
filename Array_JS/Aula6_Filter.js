//função filter

const produtos = [
    {nome: "Caderno", preço: 10.50, vendido: true },
    {nome: "Lapis" , preço: 2.75, vendido: false},
    {nome: "Estojo", preço: 19.99, vendido: true}

]

const FiltroPreço = p => p.preço < 19
const FiltroVendido = p => p.vendido == true

const ArrayFiltrado = produtos.filter(FiltroPreço).filter(FiltroVendido)

console.log(ArrayFiltrado)

/* PARÊMETROS DA FUNÇÃO FILTER ---> primeiro parâmetro é o atributo do array, segundo parâmetro é o índice e o terceiro
é o o próprio array em si*/