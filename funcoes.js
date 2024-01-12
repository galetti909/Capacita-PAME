// Funções são blocos de código executados quando chamados. São declaradas com o prefixo function. 

function exibe3Hello() { // Para delimitar o bloco de código da função, utilizam-se colchetes
    console.log("Hello, World!");
    console.log("Hello, World!");
    console.log("Hello, World!");
} // Para delimitar o bloco de código da função, utilizam-se colchetes

exibe3Hello();
// Essa chamada de funçao imprimirá no console a mensagem "Hello, World!" 3 vezes

// Elas podem receber valores de entrada e também retornar algum valor. Para denotar o valor retornado, basta escrever "return" antes dele.
var x = 5;

function calculaPotencia(base, expoente) // Você precisa "avisar" que a função receberá esses valores de entrada (chamados de parâmetros) para poder utilizá-los dentro do bloco. Para isso, basta listá-los dentro dos parênteses da declaração da função separados por vírgula, como foi feito à cima.
{
    return base**expoente;
    // O return sempre encerra a execução da função. Nenhuma linha do bloco de código da função após o return será executada.
}

// Como essa função possui um retorno, utilizá-la será o mesmo que utilizar o valor que ela retorna
var quadradoDe5 = calculaPotencia(5, 2);
// Valor final de quadradoDe5 = 25

// IMPORTANTE: Variáveis declaradas dentro do bloco de uma função só existem dentro desse bloco. Caso você tente chamá-las fora do bloco, o
// programa não conseguirá encontrá-las. Observe o exemplo:

function divisaoPor2(num1) {
    let resultado = num1/2;
    return resultado;
}

console.log(resultado)
// Esse trecho restulará em um erro, porque o valor resultado não existe no momento em que foi chamado.