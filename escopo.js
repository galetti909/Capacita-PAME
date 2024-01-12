// Em JavaScript, existem outros tipos de variáveis além de var: let e const.

// Var
// Variáveis do tipo var possuem escopo global ou de função, dependendo de onde foram declaradas.
// Se for declarada dentro de uma função, a variável do tipo var existirá para todo o bloco de código da função.
// Se for declarada fora de funções, no escopo global, a variável do tipo var existirá para todo o código.
function f() {
    var teste = 2;
}

console.log(teste);
// Essa linha de código resultará em erro.

// Let
// Variáveis do tipo let possuem escopo de bloco. 
// Isso significa que elas só existem dentro do bloco de código ({}) onde foram declaradas.
for(let i = -1; i < 2; i++){
    if (i == 0) {
        var x = 3;
    }
    if (i == 1) {
        let y = 5;
    }
}
console.log(x); // X será encontrado, já que foi declarado como var
console.log(y); // Y não será encontrado, já que foi declarado como let

// Const
// Variáveis do tipo const, assim como let, também possuem escopo de bloco.
// Porém, essas variáveis têm valor constante, ou seja, não podem ser modificadas depois de inicializadas.

const PI = 3.14;
PI = 5; // Essa linha de código resultará em um erro.

//var é considerada uma prática ruim pois valores globais ou com escopos muito amplos são díficeis de controlar
//Além disso o funcionamento de let é mais eficiente, o que fez com que, hoje em dia, o prefixo var tenha caído em desuso