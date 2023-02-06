//Importa Classe Juros do arq Juros.js
import Juros from './Juros.js';

console.log('M01-S05-EX06');

//instancia objetos e testa classe
const aplicacao1 = new Juros(10000, 0.07, 24);
const aplicacao2 = new Juros(10000, 0.15, 10);

console.log(aplicacao1.calcularJurosSimples()); //26800 - Exibe no Console.
console.log(aplicacao2.calcularJurosCompostos()); //40456 - Exibe no Console.
