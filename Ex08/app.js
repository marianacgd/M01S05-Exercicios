//Importa Classe Ususario do arq Usuario.js
import Usuario from './Usuario.js';

console.log('M01-S05-EX08');

//Recebe dados dos campos digitados pelo usuario
const cEmail = document.getElementById('campo-email');
const cSenha = document.getElementById('campo-senha');
const bAcessar = document.getElementById('botao-acessar');
const pMensagem = document.getElementById('p-mensagem');

//Instancia Objeto
const usuarios = [new Usuario('Mariana', 'mariana@dih.br', '123456'), new Usuario('Romeu', 'romeu@dih.br', '123')];

bAcessar.addEventListener('click', () => {
  const email = cEmail.value;
  const senha = cSenha.value;

  let usuarioEncontrado = null;

  if (email && senha) {
    usuarioEncontrado = usuarios.find((usuario) => {
      return usuario.autenticar(email, senha);
    });
  }

  if (usuarioEncontrado) {
    pMensagem.innerHTML = `Olá, ${usuarioEncontrado.nome}!`;
    cEmail.value = '';
    cSenha.value = '';
  } else {
    pMensagem.innerHTML = 'Credenciais inválidas!';
  }
});
