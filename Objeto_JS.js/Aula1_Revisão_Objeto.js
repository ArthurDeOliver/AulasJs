//             CRIAR OBJETO COM O NEW OBJECT
const produto = new Object
//INCREMENTAR DADOS NO OBJETO
produto.nome = 'cadeira';
//FORMA EQUIVALENTE DE INCREMENTAR NO OBJETO
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto);
//DELETAR DADOS DO OBJETO
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'A4',

    valor: 899000,

    dono: {
        nome: "Arthur",
        idade: 22,
        endereço: {
            logradouro: "Rua dois",
            numero: "81"
        }
    },

    //COLOCAR OS DADOS DE UM OBJETO EM UM ARRAY
    condutores: [{
        nome: "César",
        idade: 28
    },
    {
        nome: "augusto",
        idade: 82,
    }],

    //COLOCAR UMA FUNÇÃO DENTRO DE UM OBJETO
    valorSeguro : (dinheiro = true) => {
        let situacao = ''
        if(dinheiro == true){
            let situacao = "pago"
        }else {
            let situacao = "não pago"
        }
        return situacao
    } 
}

carro.dono.endereço.numero = 123;
carro['dono']['endereço']['logradouro'] = "Av gigante"

delete carro.condutores; //DELETANDO O ARRAY CONDUTORES

console.log(carro.condutores); //UNDEFINED
//console.log(carro.condutores.length) // NÃO É POSSÍVEL OBTER OPERAÇÕES QUANDO NÃO SE TEM O ARRAY

 {
    const objeto1 = {
        nome: 'arthur',
        idade: 22
    }

    const copiaObjeto = Object.assign({}, objeto1)
            //cópia de um objeto para outro, no caso, copiar objeto1 para copiaObjeto através do assign
    console.log(copiaObjeto)
 }