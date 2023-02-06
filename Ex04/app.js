//Importa SubClasses Cachorro e Gato do arq Animal.js
import { Cachorro, Gato } from './Animal.js';

console.log('M01-S05-EX04');

//instancia objeto e testa a subclasse
const snoopy = new Cachorro('snoopy', 10);
console.log(snoopy.som); // "latido" - Exibe no Console.

//instancia objeto e testa a subclasse
const frajola = new Gato('frajola', 8);
console.log(frajola.som); // "miado" - Exibe no Console.
