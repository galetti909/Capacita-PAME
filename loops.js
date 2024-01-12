// Para otimizar os códigos as linguagens tem maneiras de criar estrutras de repetição, os loops. Esses evitam que se precise escrever linhas de códigos com a mesma ideia múltiplas vezes, ao reproduzir blocos de código múltiplas vezes. Em JavaScript existem dois tipos de loops:

//While loop
//Roda o bloco de código enquanto a expressão dentro dos parênteses for igual ao booleano "true" (for verdadeira)

let x = 0
while(x<5){
    console.log(x)
    x = x + 1 //Valores atribúidos a variáveis podem utilizar os valores da própria variável antes da nova atribuição.
}

//For loop
// Roda o bloco de código a partir de 3 valores; uma variável declarada para controlar o loop, uma condição para que o loop não seja quebrado (assim como while), e uma nova atribuição, que acontecerá no fim de cada "volta" do bloco, à variável declarada anteriormente, 

for(let i = 0;i<5; i++)// i = i + a pode ser escrito como i += a, no caso de a ser 1, a expressão pode ser representada com i++
//No caso do for esses valores são separados por ";"
{
    console.log(i)
}
//Esse exemplo tem resultado exatamente igual ao do while loop

