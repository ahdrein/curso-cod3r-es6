//Exemplo MDN
function Pessoa() {
    var self = this;
    self.idade = 0;

    setInterval(() => {
        self.idade++;
        console.log(self.idade);
    }, 1000);
}

new Pessoa();



// this.desc = 'Sou o module.exports... :P';
// const obj = {desc: 'Sou o obj... :P'};

// const func = function () {
//     console.log(this);
// };
// func();

// const funcBind = func.bind(obj);
// funcBind();

// const arrowFunc = () => console.log(this);
// arrowFunc();

// const arrowFuncBind = arrowFunc.bind(obj);
// arrowFuncBind();





// 'use strict'

// this.desc = 'Sou eu... :P';
// console.log(this);

// const func = function(){
//     console.log(this === undefined);
// }
// func();

// const arrowFunc = () =>
//     console.log(this, this === module.exports);
// arrowFunc();






// this.desc = 'Sou eu... :P';
// console.log(this);

// const func = function () {
//     console.log((this === global));
// };
// func();

// const arrowFunc = () =>
//     console.log(this, this === module.exports);
// arrowFunc();