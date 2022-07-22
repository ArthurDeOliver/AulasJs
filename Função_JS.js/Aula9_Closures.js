//CLOSURES É O ESCOPO DA FUNÇÃO QUANDO ELA É DECLARADA 
//CLOSURES PERMITE MANIPULAR VARIÁVEIS EXTERNAS A FUNÇÃO

const x = "global";

funcaolocal = () => {
    const x = "local"
    dentro = () => x
    //RETURN DESTA FUNÇÃO É UMA FUNÇÃO
    return dentro
}
//DEPOSITANDO UMA FUNÇÃO UMA VARIÁVEL 
const função = funcaolocal()
//CHAMADA DA VARIÁVEL Q FOI DEPOSITADA UMA FUNÇÃO POR ()!!
console.log(função())
