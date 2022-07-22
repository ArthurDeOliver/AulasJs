const pilotos = ['vettel','alonso','arthur','massa']
pilotos.pop() //remove o último elemento do array
console.log(pilotos)

pilotos.push('angelo')//adiciona a partir do último elemento do array 
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.sort()
console.log(pilotos)

//retirar elementos com splice
pilotos.splice(1,2)
console.log(pilotos)

//colocando elementos com splice
pilotos.splice(1,0,"piloto 1", 'piloto 2', 'piloto 3', 'piloto 4')
console.log(pilotos)

const AlgunsPilotos = pilotos.slice(3) //gera um novo array a partir do 3° elemento do array pilotos
console.log(AlgunsPilotos)

const AlgunsPilotos1 = pilotos.slice(1, 4) //gera um novo array, o primeiro parâmetro diz qual posição começar
//o segundo parâmetro diz até onde vai mas não contando com ele
console.log(AlgunsPilotos1)