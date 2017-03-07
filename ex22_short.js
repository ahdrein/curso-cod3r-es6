var nome  ='Bia', anoNascimento=1981;
function idade(){
    return new Date().getFullYear() - anoNascimento;
}
var pessoa = {
    nome,//:this.nome,
    anoNascimento,//:this.anoNascimento,
    idade,//:this.idade(),
    toString(){return `${nome} = ${idade()}`;}
};
console.log(pessoa.toString());