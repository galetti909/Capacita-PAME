// Arrays são listas de elementos ordenados. Para declarar uma lista, basta dispor os elementos entre colchetes
// e separá-los por vírgula.

let lista = [1, "João", false, 4, 5]
// Note que os tipos dos elementos na lista podem ser distintos.

// Cada elemento da lista tem seu índex (posição), que começa em 0 e vai até o final dela.
// O elemento 0 é 1, o elemento 1 é "João", o elemento 2 é false e assim por diante.

// Para acessar um valor dentro de uma lista, é necessário escrever o nome da lista com a posição do elemento
// entre colchetes ([]).

let primeiros3Elementos = lista[3]
// Valor final de primeiros3Elementos: 4

// Para modificar um elemento da lista, basta atribuí-lo como se fosse uma variável.
lista[2] = true

// Uma lista pode ter outras listas dentro dela. Essas listas são chamadas de listas aninhadas.
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let primeiroElementoDaTerceiraLista = matriz[2][0]


// Métodos de listas
// Os métoods de listas são operações que estão disponíveis para todas as instâncias do tipo array.
// Alguns dos principais métodos de listas são:

// Array.pop() - remove o último elemento da lista.
matriz.pop()
// Valor final de matriz: [[1, 2, 3], [4, 5, 6]]

// Array.push(elemento) - adiciona "elemento" no final da lista.
matriz.push([10, 11, 12])
// Valor final de matriz: [[1, 2, 3], [4, 5, 6], [10, 11, 12]]

// Array.shift() - remove o primeiro elemento da lista.
matriz.shift()
// Valor final de matriz: [[4, 5, 6], [10, 11, 12]]

// Array.unshift(elemento) - adiciona "elemento" no início da lista.
matriz.unshift([3, 2, 1])
// Valor final de matriz: [[3, 2, 1], [4, 5, 6], [10, 11, 12]]

// Array.slice(inicio, fim) - retorna uma parte de uma lista. 
// O primeiro parâmetro é o índice do primeiro elemento e o segundo é o índice do último elemento + 1.
let parteDaLista = matriz.slice(0, 2)
// Valor final de parteDaLista: [[3, 2, 1], [4, 5, 6]] 

// Array.indexOf(elemento) - retorna a posição da primeira aparição do elemento especificado na lista.
let lista_2 = ["eu", "sou", "lindo"]
let posicao = matriz.indexOf("lindo")
//Valor final de posicao: 2