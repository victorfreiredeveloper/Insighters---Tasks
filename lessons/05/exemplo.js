let v_idade = 21;
let nome    = "Matheus";

const pessoa = {
    idade : 32,
    nome  : "Victor",
    qualificacoes : {},
    retornaIdade (idade){
        console.log(`A idade do ${nome} é ${idade} anos
A idade do ${this.nome}  é ${this.idade} anos`);
    }

}
pessoa.qualificacoes = {grau : "5 série", idioma : ["Portugues", "Guarani"]}
pessoa.retornaIdade(v_idade);
console.log(pessoa);