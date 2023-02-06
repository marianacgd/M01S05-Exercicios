//Importa Classe CalculadoraDeArea do arq CalculadoraDeArea.js
import CalculadoraDeArea from './CalculadoraDeArea.js';

console.log('M1-S05-EX05');

//instancia objeto e testa classe
const quadA = new CalculadoraDeArea('quadrado', 6, 6);
const areaQA = quadA.calcular();
console.log(areaQA); // 36 - Exibe no Console.

//instancia objeto e testa classe
const triangB = new CalculadoraDeArea('triangulo', 8, 7);
const areaTB = triangB.calcular();
console.log(areaTB); // 28 - Exibe no Console.
