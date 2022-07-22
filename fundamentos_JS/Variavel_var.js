var a = 3; //variável incia com o valor definido

{
    var a = 5; // variável muda de valor ao entrar neste bloco de código
    console.log(a);
}

console.log(a); // a variável ainda continua com o valor mudado

var b = 6; //var tem escopo global ou seja em todo o código é possível ver ela
{
    let b = 1000; //o escopo da variável let é dentro do bloco de função
    console.log(b);
}
console.log(b);

//equivalente:

let c = 26; 
{
    let c = 4000; 
    console.log(c);
}
console.log(c);

/*====== NÃO É POSSÍVEL CRIAR VARIÁVEL LET DENTRO DE UM BLOCO DE CÓDIGO E CHAMAR A VARIÁVEL FORA DELA, =========
POIS O ESCOPO DA VARIÁVEL LET É DENTRO DO BLOCO DE CÓDIGO OU SEJA, ELA É APENAS VISTA DENTRO DO BLOCO DE CÓDIGO
*/