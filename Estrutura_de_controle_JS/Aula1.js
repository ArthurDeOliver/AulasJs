//BOAS NOTICIAS

//const ufpe = function provas(nota1, nota2, nota3, final){
    
function provas(nota1, nota2, nota3, final){

    let media = (nota1 + nota2 + nota3) / 3;

    if(media > 7) {

        console.log("Aprovado por média, sua média é:", media);
  
    } else if ((media < 7) && (media >= 3)){
        
        let mediafinal = (final+ media)/2

        if (mediafinal >= 5 ){

            console.log("Aprovado, sua média é:", mediafinal)

        }else{ 

            console.log("Reprovado, sua média é:", mediafinal) 

        }

    } else {

        console.log("Reprovado, sua média é:", media)

    }


}

//ufpe(2.8,2.45,7.71, 5.87);
provas(2.8,2.45,7.71, 5.87);
