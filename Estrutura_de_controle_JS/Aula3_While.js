function gerador(min, max){

    const Numgerado = Math.random() * (max - min) + min; //GERA NUMERO ALEATÓRIO 

    return Math.floor(Numgerado)
}
//let numero = gerador(1, 10);
//console.log(numero);

let numero = -10; //ENTRADA NO CICLO
let ciclo = 0;

while(numero != 0){ //SE FOR DIFERENTE DE 5 EXECTUAR OQ TIVER EMBAIXO

    numero = gerador(-10, 10); //DESPOSITAR O VALOR DO NUMERO GERADO NA VARIÁVEL NUMERO
    
    console.log(`
O número gerado foi: 
${numero}
`); //QUEBRA DE LINHA COLOCAR ENTRE ASPAS E $ A VARIÁVEL A SER MOSTRADA

ciclo += 1;

}

if(ciclo < 3){

    console.log(`Sorte grande!! número de ciclos: ${ciclo}`);

} else {

console.log(`Fim do código número de ciclos: ${ciclo}`); //FIM DO ESCOPO DO CICLO EXECUTA ESTA SENTEÇA E TERMINA O CÓDIGO

}

