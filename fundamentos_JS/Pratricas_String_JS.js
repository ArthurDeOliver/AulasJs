var a = "Arthur Angelo";

console.log(a || "desconhecido"); // imprimi o primeiro valor verdadeiro
/* string  são dito como valores verdadeiros assim como qualquer número maior ou menor que 0

let a = ''; 
console.log(!!a); ---> Retorna falso!
*/

let b = "Arthur";
let c = "Angelo, programador";

let p = ` ${b} 



${c}`; // QUEBRA DE LINHA DA UM STRING ATRAVAÉS DA INTERPOLAÇÃO ${variável} entre crases ` `!

console.log(p);

console.log(p.toUpperCase()); //colocar a string em CAPSLOCK