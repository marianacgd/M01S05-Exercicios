//Exporta por padrao a Classe Juros
export default class Juros {
  capitalInicial; //Atributo
  taxaAplicada; //Atributo
  tempo; //Atributo

  //Construtor inicializa atributos
  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada;
    this.tempo = tempo;
  }

  //Metodo
  calcularJurosSimples() {
    const C = this.capitalInicial;
    const i = this.taxaAplicada;
    const t = this.tempo;
    const J = C * i * t;
    return Math.round(C + J); //Arredonda pra menos
  }

  //Metodo
  calcularJurosCompostos() {
    const C = this.capitalInicial;
    const i = this.taxaAplicada;
    const t = this.tempo;
    const M = C * (1 + i) ** t;
    return Math.round(M); //Arredonda pra menos
  }
}
