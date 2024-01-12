//JavaScipt não tem ferramentas ideais para encapsulamento


class Pessoa{
    constructor(nome, idade, altura){
        this._nome = nome; //em python usa-se "_" antes da variável para tornar o atributo privado
        this.idade = idade;
        this.altura = altura;
    }
}

eu = new Pessoa('João',20,1.75)

console.log(eu._nome)
//A ideia do encapsulamento seria fazer com que o atributo não pudesse ser acessado dessa maneira