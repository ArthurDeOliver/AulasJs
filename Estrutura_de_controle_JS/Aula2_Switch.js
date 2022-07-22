function situacao(notas){

    switch(notas){

        case 10: case 9: case 8: case 7:
        console.log("Aprovado sua nota:", notas);
        break; // se não colocaro break em cada case p código executará o próximo case

        case 6: case 5: case 4: case 3:
        console.log("final sua nota:", notas);
        break;

        case 2: case 1: case 0:
        console.log("Reprovado sua nota:", notas);
        break;    

        default: 
        console.log("Nota inválida:", notas);
        break;
    }

}

situacao(7);
situacao(-1);

