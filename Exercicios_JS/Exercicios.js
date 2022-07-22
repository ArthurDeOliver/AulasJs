const dados = [
    {nome: 'arthur', categoria: 'estudante', salario: 89.99}, 
    {nome: 'angelo', categoria: 'professor', salario: 150}]

const SomarSalário = (array) => {
    let resultado = array.map(e => e.salario).reduce((ac, vi) => ac + vi)
//map seleciona o atributo salario do objeto dentro do array
//reduce soma esses valores após selecionar

    return resultado
}

console.log(SomarSalário(dados))

