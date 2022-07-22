//Array práticas

let a = [0,1,2,3];
const funcs = []; //array sem indices.

console.log(a[0], a[1], a[2], a[3], a[4]); //mostra o valor do espaço do array específico
console.log(a.length); // tamanho do array

a[4] = 4; //incrementando valores no aray e aumentando seu temanho

console.log(a.length);

a.pop(); //retirou a último termo do array, pode mostarar no console.log(a.pop()); esse último valor
delete a[0]; //deleta um esáço do array escolhido
a.push(4,1,5,6); //coloca esses valores no array a partir do último espaço

console.log(a);
