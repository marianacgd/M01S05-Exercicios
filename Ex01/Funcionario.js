//Cria e exporta classe Funcionario
export default class Funcionario {
  cpf; //atributo
  nomeCompleto; //atributo
  salario; //atributo

  constructor(cpf, nomeCompleto, salario) {
    console.log(Funcionario.validarCPF(cpf)); //Informa no console se o CPF e valido ou invalido
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }

  //Implementa metodo promover q recebe como parametro o percentual
  promover(percentual) {
    // const multiplicador = percentual / 100 + 1;
    // const novoSalario = this.salario * multiplicador;
    // this.salario = novoSalario;
    this.salario *= percentual / 100 + 1;
  }

  //Cria metodo estatico para validar CPF
  static validarCPF(cpfOriginal) {
    const cpf = cpfOriginal.replace(/[^\d]+/g, ''); //Regex ele substitui as correspondências por strings vazia

    if (cpf == '') {
      return 'CPF Inválido';
    }

    // Elimina CPFs invalidos conhecidos
    if (
      cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return 'CPF Inválido';
    }

    // Valida Primeiro digito
    let add = 0;
    let rev;

    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) {
      return 'CPF Inválido';
    }

    // Valida Segundo digito
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10))) {
      return 'CPF Inválido';
    }
    return 'CPF Válido!';
  }
}
