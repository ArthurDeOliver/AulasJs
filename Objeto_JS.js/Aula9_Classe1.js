//classe é uma forma de escrever uma função
//muito bom para criar uma função construct 

class lancamento { 
    //usando a função constructor cria-se alguma coisa, neste caso, um objeto, seria os parâmetros da função lancamento
    constructor(nome = "genérico", valor = 0){
        //usando this para instanciar um atributo a esta função lançamento
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }

    addLancamentos(...lancamento){
        lancamento.forEach(l => this.lancamento.push(l))
    }

    sumario() {
        let valorconsolidado = 0
        this.lancamento.forEach(l => {
            valorconsolidado += l.valor
        })
        return valorconsolidado
    }
}

const salario = new lancamento("salario", 45000)
const contadeluz = new lancamento ("luz", -220)
const contas = new CicloFinanceiro(6,2022)

contas.addLancamentos(salario, contadeluz)
console.log(contas.sumario())