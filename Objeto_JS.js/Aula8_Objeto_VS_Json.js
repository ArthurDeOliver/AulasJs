//JSON é um arquivo texto, nele carrega dados que possui

const objeto = { nome: "arthur", idade: 41, gosta(){ return "cachorro"}}

//COMO CONVERTER OBJETO PARA JSON?

console.log(JSON.stringify(objeto)) //JSON é aqruivo de texto não executável, logo, não irá passar a função gosta()

console.log(JSON.parse('{"a" : 1, "b": "String", "c": true, "d": {}, "c": [] }'))//converter JSON para Objeto
