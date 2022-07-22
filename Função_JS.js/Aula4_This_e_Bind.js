const dados = {
    saudação : "Olá!",
    falar() {

        console.log(this.saudação); //acessando um atributo do objeto dentro dele pelo this

    }
}

dados.falar();

const fala = dados.falar.bind(dados); //referenciar a função por bind
// variável fala = dados.falar => pegando a parte do objeto e aplicando o .bind(dados)
fala(); //chamada da função fala