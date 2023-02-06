//Importa Classe Personagem do arq Personagem.js
import Personagem from './Personagem.js';

console.log('M01-S05-Ex03');

const alyx = new Personagem('Alyx');

console.log(alyx.percentualVida); // 100 - Exibe no Console.

alyx.sofreuDano(50);

console.log(alyx.percentualVida); // 50 - Exibe no Console.

alyx.usouKitMedico();

console.log(alyx.percentualVida); // 60 - Exibe no Console.
