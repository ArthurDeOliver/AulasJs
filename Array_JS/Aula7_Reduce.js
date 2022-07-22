//Reduce assim como filter, foreach, map é uma função callback que percorre o array
//Reduce reduzir o array em outro dado

const produtos = [
    {nome: "Caderno", preço: 10.50, vendido: true },
    {nome: "Lapis" , preço: 2.75, vendido: false},
    {nome: "Estojo", preço: 19.99, vendido: true}

]

const AcumuladorReduce = (acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
}

const resultado = produtos.map(a => a.preço).reduce(AcumuladorReduce/*, TERCEIRO PARÂMETRO COMO VALOR INICIAL */ )

console.log(resultado)