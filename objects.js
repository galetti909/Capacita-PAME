//Objects são conjuntos de propriedades com valores atribuídos.

let meu_carro = {cor:'Azul', ano:2019, marca:'Ford' }


//Nos objetos os itens não podem ser acessados usando [] como nas listas, ao invés disso usa-se uma das chaves (cor, ano, marca) para encontrar o seus respectivo valor ('Azul', 2019, 'Ford), com a sintaxe 
// ome_da_variavel.chave
console.log(meu_carro.cor) // Será exibido Azul no console


//Valores também podem ser alterados a partir de suas chaves
meu_carro.cor = 'Vermelho'
console.log(meu_carro.cor) // Será exibido Vermelho no console


//Com a sintaxe acima, caso a chave referida não exista, será criado no objeto um novo par chave-valor
meu_carro.placa = 'LPQ-7D83'
console.log(meu_carro) // O resultado será {cor:'Azul', ano:2019, marca:'Ford', placa:'LPQ-7D83'}


//Para remover uma propriedade, basta usar a sintaxe delete ome_da_variavel.chave
delete meu_carro.cor
console.log(meu_carro) // O resultado será {ano:2019, marca:'Ford', placa:'LPQ-7D83'}



