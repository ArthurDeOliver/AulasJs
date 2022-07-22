//função map        
//incrementa algo nos atributos do array
const nums = [1, 2, 3, 4, 5]

//map possuí um for dentro dele
//função arrow tem retunr implícito
let resultado = nums.map(e => e*2)

console.log(resultado)

Soma10 = e => e+10
Divide2 = e => e/2
Triplica = e => e*3

let resultadoVariosMaps = nums.map(Soma10).map(Divide2).map(Triplica)
/*let resultadoDivide2 = nums.map(Divide2)
let resultadoTriplica = nums.map(Triplica)*/

console.log(resultadoVariosMaps)
