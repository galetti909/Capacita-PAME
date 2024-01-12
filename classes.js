//Para criar uma classe nova em JS usa-se o prefixo class

class Pessoa{ //Diferente do que com funções, os parâmetros são definidos no construtor.
    constructor(nome, idade, altura){ // O constructor é um método especial pré definido por onde se indicam os paramêtros para criação de uma instância
        this.nome = nome; //A palavra chave "this" é usada sempre que se quer tratar de algo relacionado a uma instância da classe
        this.idade = idade; //Nesse caso estamos declarando idade para cada instância de Pessoa (this.idade) e atribuindo o valor referente ao construtor (= idade)
        this.altura = altura;
    }
    andar(){
        console.log(this.nome +' andou')//De novo "this" é usado pois se quer fazer referência ao nome de uma instância específica
    }
    comer(){
        console.log(this.nome +' comeu')
    }
    pensar(){
        console.log(this.nome +' pensou')
    }

}

let meu_nome = 'João'
let minha_idade = 20
let minha_altura =  1.75

//Sempre que se quiser criar uma instância de uma classe deve ser usado o prefixo new
eu = new Pessoa(meu_nome,minha_idade,minha_altura)//A instância será armazenada na variável "eu"

console.log(eu)
console.log(eu.altura)
eu.comer()