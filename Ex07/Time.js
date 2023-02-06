// Vitória = 3 pontos
// Derrota = 0 pontos
// Empate  = 1 ponto

//Exporta por padrao a Classe Time
export default class Time {
  nome; //Atributo
  sigla; //Atributo
  vitorias = 0; //Atributo
  derrotas = 0; //Atributo
  empates = 0; //Atributo
  golsMarcados = 0; //Atributo
  golsSofridos = 0; //Atributo

  //Construtor inicializa atributos
  constructor(nome, sigla) {
    this.nome = nome;
    this.sigla = sigla;
  }

  //Metodo
  computarPartida(partida) {
    const { siglaTimeA, golsTimeA, siglaTimeB, golsTimeB } = partida;
    let golsDesteTime = 0;
    let golsAdversario = 0;

    if (this.sigla === siglaTimeA) {
      golsDesteTime = golsTimeA;
      golsAdversario = golsTimeB;
    } else if (this.sigla === siglaTimeB) {
      golsDesteTime = golsTimeB;
      golsAdversario = golsTimeA;
    } else {
      return; // sai da funcao
    }

    this.golsMarcados += golsDesteTime;
    this.golsSofridos += golsAdversario;

    if (golsDesteTime > golsAdversario) {
      this.vitorias++;
    } else if (golsDesteTime < golsAdversario) {
      this.derrotas++;
    } else {
      this.empates++;
    }
  }

  //Metodo
  exibirSituacao() {
    const pontos = this.vitorias * 3 + this.empates;
    console.log(this);
    console.log(`Pontos: ${pontos}`);
  }
}
