var estoque = [
    { nome: 'Resma de Papel A4', preco: 19.90, qtde: 300, fragil: false },
    { nome: 'Monitor LG 29 IPS', preco: 1699, qtde: 15, fragil: true },
    { nome: 'Ovos Brancos - 30 unid', preco: 18.99, qtde: 21, fragil: true },
    { nome: 'Pneu Pirelli', preco: 11024.34, qtde: 16, fragil: false },
    { nome: 'Apple IPad Pro 32gb - tela 12,9', preco: 3999, qtde: 17, fragil: true }
];

const isPrecoAlto = item => item.preco >= 1000;
const isFragil = item => item.fragil;

const qtdeProdutosCarosEFrageis = estoque
.filter(isPrecoAlto)
.filter(isFragil)
.map(item => item.qtde)
.reduce((total, qtde) => total + qtde);

console.log(qtdeProdutosCarosEFrageis);

// const qtdeProdutosCarosEFrageis = estoque
// .filter(function (item) {
//     return item.preco >= 1000;
// })
// .filter(function (item) {
//     return item.fragil;
// })
// .map(function (item) {
//     return item.qtde;
// })
// .reduce(function (total, qtde) {
//     return total + qtde;
// });

// console.log(qtdeProdutosCarosEFrageis);