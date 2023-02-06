//Cria e exporta como padrao a classe Fatura
export default class Fatura {
  id; //Atributo
  descricao; //Atributo
  quantia = 0; //Atributo
  preco = 0; //Atributo

  //construtor inicializa todos os atributos
  constructor(id, descricao, quantia, preco) {
    this.id = id;
    this.descricao = descricao;

    // exemplo teste com if
    if (quantia > 0) {
      this.quantia = quantia;
    }
    // exemplo teste com ternario
    this.preco = preco > 0 ? preco : 0;
  }

  //Metodo q calcula o valor da fatura
  obterValorTotal() {
    return this.quantia * this.preco; //multiplica a quantidade pelo preco do item.
  }

  //cria metodo getter, com calculo igual de obterValorTotal,
  //mas pode ser acessado sem o uso de parentesis.
  get valorTotal() {
    return this.obterValorTotal();
  }
}
