//Cria e exporta por padrao a Classe Personagem
export default class Personagem {
  nome; //Atributo
  percentualVida = 100; //Atributo

  //metodo
  sofreuDano(percentualDano) {
    const novaVida = this.percentualVida - percentualDano;
    this.percentualVida = novaVida < 0 ? 0 : novaVida; //se novaVida for menor q 0 == 0 se nao eh novaVida
  }

  //metodo
  usouKitMedico() {
    const novaVida = this.percentualVida + 10;
    this.percentualVida = novaVida > 100 ? 100 : novaVida;
  }
}
