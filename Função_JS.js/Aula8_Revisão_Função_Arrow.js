funcao1 = a => a+2
//PARA UMA ÚNICA LINHA DE CÓDIGO N PRECISA COLOCAR O RETURN
//NÃO PRECISA POR OS PARÊNTESES QUANDO A FUNÇÃO TIVER APENAS 1 PARÊMETRO
console.log(funcao1(2))

//NOME DA FUNÇÃO
funcao2 = (a,b) => {
//        RECEBE COMO PARÂMETRO a & b
   let resultado;

   resultado = a + b;
//RETURN DA FUNÇÃO 
   return resultado

 }
//          CHAMADA DA FUNÇÃO ARROW
 console.log(funcao2(3,6))