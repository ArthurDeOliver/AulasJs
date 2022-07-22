//DESTRUC COMO PARÂMETRO DE FUNÇÃO

function valores([min = 0, max = 10]){
    if(min > max) [min, max] = [max, min]
    const numero = Math.random() * (max - min ) - min;
    
    return Math.floor(numero);
}

console.log(valores([900,100]));
