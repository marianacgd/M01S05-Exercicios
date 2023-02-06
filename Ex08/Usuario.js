//Exporta por padrao a Classe Usuario
export default class Usuario {
  nome; //Atributo
  email; //Atributo
  senha; //Atributo

  //Construtor inicializa atributos
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  //Metodo
  autenticar(emailInformado, senhaInformada) {
    return this.email === emailInformado && this.senha === senhaInformada;
  }
}
