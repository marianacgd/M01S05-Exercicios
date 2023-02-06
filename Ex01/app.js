import Funcionario from './Funcionario.js'; //Importa Classe Funcionario do arq Funcionario.js

console.log('M01-S05-EX01');

//Cria objeto ada
const ada = new Funcionario('528.442.040-31', 'Ada Lovelace', 1000);

console.log(ada.salario); // 1000 - Exibe no Console

ada.promover(50);

console.log(ada.salario); // 1500 - Exibe no Console
