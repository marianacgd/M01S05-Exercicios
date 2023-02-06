//Exporta por padrao a Classe Partida
export default class Partida {
  siglaTimeA; //Atributo
  golsTimeA; //Atributo
  siglaTimeB; //Atributo
  golsTimeB; //Atributo

  //Construtor inicializa atributos
  constructor(siglaTimeA, golsTimeA, siglaTimeB, golsTimeB) {
    this.siglaTimeA = siglaTimeA;
    this.golsTimeA = golsTimeA;
    this.siglaTimeB = siglaTimeB;
    this.golsTimeB = golsTimeB;
  }
}
