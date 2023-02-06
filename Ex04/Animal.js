//Exporta por padrao a Classe Animal
export default class Animal {
  nome; //Atributo
  idade; //Atributo
  som; //Atributo

  //Contrutor inicializa atributos
  constructor(nome, idade, som) {
    this.nome = nome;
    this.idade = idade;
    this.som = som;
  }
}

//Cria e exporta SubClasse Cachorro de Animal
export class Cachorro extends Animal {
  constructor(nome, idade) {
    super(nome, idade, 'latido');
  }
}
//Cria e exporta SubClasse Gato de Animal
export class Gato extends Animal {
  constructor(nome, idade) {
    super(nome, idade, 'miado');
  }
}
