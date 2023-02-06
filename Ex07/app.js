//Importa a Classe Time do arq Time.js
import Time from './Time.js';
//Importa a Classe Partida do arq Partida.js
import Partida from './Partida.js';

console.log('M01-S05-EX07');

//Declara o vetor times
const times = [
  new Time('Grêmio', 'GRE'),
  new Time('Internacional', 'INT'),
  new Time('Figueirense', 'FIG'),
  new Time('São Paulo', 'SAO'),
];

//Declara o vetor partidas
const partidas = [
  new Partida('GRE', 2, 'INT', 1),
  new Partida('FIG', 1, 'GRE', 0),
  new Partida('INT', 3, 'SAO', 1),
  new Partida('SAO', 1, 'FIG', 1),
];

times.forEach((time) => {
  partidas.forEach((partida) => {
    time.computarPartida(partida);
  });
  time.exibirSituacao();
});
