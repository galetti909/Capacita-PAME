//Para herdar métodos e atributos de outra classe basta usar a palavra chave "extends" durante a criação

//Primeiro definindo a classe pessoa nesse arquivo :)
class Pessoa{
    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    andar(){
        console.log(this.nome +' andou')
    }
    comer(){
        console.log(this.nome +' comeu')
    }
    pensar(){
        console.log(this.nome +' pensou')
    }

}

//Depois se define a classe filha
class Atleta extends Pessoa{
    correr(){
        console.log(this.nome +' correu')
    }
}

//eu = new Atleta('João',20,1.75)
//console.log(eu)
//eu.correr()
