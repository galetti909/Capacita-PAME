// Condicionais são verificações de valores que autorizam ou impedem a execução de um bloco de código.

var x = 5;
if (x > 3) { // A palavra "if" é utilizada para realizar essa verificação. A condição fica entre os parênteses.
             // Caso a expressão seja verdadeira (true), o bloco dentro dos colchetes será executado.
    console.log("É maior que 3");
}

// Caso a expressão seja falsa (false), é possível fazer verificações alternativas com a expressão "else if".
var y = 2;
if (y > 3) {
    console.log("É maior que 3");
} else if (y == 2) {
    console.log("É igual a 2");
}


// Para cobrir o caso em que todas as verificações anteriores são falsas, utiliza-se a expressão "else".
var z = 0;
if (y > 3) {
    console.log("É maior que 3");
} else if (y == 2) {
    console.log("É igual a 2");
} else { 
    console.log("É menor que 2");
}


// Caso se queira testar se uma variável é igual a uma série de valores não é necessário criar um if para cada valor, utiliza-se a expressão "switch" da seguinte maneira
var w = 3;
switch(w){
    case 1:
        console.log("É igual a 1");
        break;
    case 2:
        console.log("É igual a 2");
        break;
    case 3:
        console.log("É igual a 3");
        break;
    default:
        console.log("Não é igual a 1, 2 ou 3");
        break;
}
