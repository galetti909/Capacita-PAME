//Para receber inputs em JavaScript vamos utilizar o módulo readline-sync
var requisicao = require('readline-sync')
var nome = requisicao.question('Qual o seu nome?')
console.log(nome)