//Apesar da herança de classes a classe filha sempre pode utilizar do polimorfismo para redefinir métodos ou atributos como for melhor

//Definindo pessoa só mais uma vez kkkkkk
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

class Taxista extends Pessoa{
    constructor(nome, idade, altura, placa, CNH)//O construtor é um método muito reescrito para que se possam adicionar novos parâmetros, para reaproveitar os parâmetros antigos sem que seja necessário reescrever suas atribuições usa-se "super(x,y,z)". O termo indica que os parâmetros serão puxados da classe mãe.
    {
        super(nome, idade, altura)
        this.placa = placa;
        this.CNH = CNH;
    }

    //Qualquer método pode ser reescrito
    comer(){
        console.log(this.nome+ ' não pode comer pois está dirigindo')
    }
}

let minha_placa = 'FLA-2O19'
let minha_CNH = '00123456789'
eu = new Taxista('João',20,1.75,minha_placa,minha_CNH)
console.log(eu.placa)
eu.comer()