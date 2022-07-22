function tratarErro(erro){ //Mostra no terminal a seguintes mensagens:
    //throw new Error('Deu errado')
    throw { //Mostra para o usuário na tela de erro qualquer coisa que colocar aq
        nome : "Erro foi gerado",
        msg : erro.message,
        date: new Date //gera uma data
    }
}

function EscreverGritando (obj){
    try { //Se gerar um erro aqui:

    console.log(obj.name.toUpperCase() + "!!!");

    } catch (e) { //Executa esta ação

        tratarErro(e);

    } finally {
        console.log("Final do processo");
    }
}

const obj = {
    nome : "arthur"
}

EscreverGritando(obj);