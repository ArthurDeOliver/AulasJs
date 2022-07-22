//OBJETOS CONJUNTO DE VALORES CATALOGADOS

const dados = {} //criação de objeto
dados.nome = "Arthur"; // atribuições ao objeto
dados.idade = 22;
dados.curso = "Engenharia da computação";
dados.gostaDeAzul = true;

const dados1 = {
    nome : "Arthur",
    endereco : {
        logradouro : "Avenida",
        numero : "12",
    },
    idade : 22,
    profissão :"Estudante",



}

console.log(dados.nome); //mostragem dos objetos

dados.nome = "Angelo";

console.log(dados);

//RETURN DE VÁRIAS VARIÁVEIS ATRAVÉS DE OBJETO RETURN ESCRITO COM {}
{function pessoal(remedio, dinheiro, doente){

    const comprarRemedio = dinheiro && doente;
    const beberRemedio = remedio || doente;
    const naoBeberRemedio = remedio != doente;

    return { comprarRemedio, beberRemedio, naoBeberRemedio }
}

console.log(pessoal(true,false,true));
}