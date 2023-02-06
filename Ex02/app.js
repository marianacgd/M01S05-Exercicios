import Fatura from './Fatura.js'; //Importa Classe Fatura do arquivo Fatura.js

console.log('M1-S05-EX02');
//Cria objeto melao
const melao = new Fatura(123, 'Melão', 2, 3);

const valor = melao.obterValorTotal(); //instancia teste a implementacao
const valorTotal = melao.valorTotal;

console.log(valor); // 6 - Exibe no console
console.log(valorTotal); // 6 - Exibe no console
