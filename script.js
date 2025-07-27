// jogo_adivinhacao.js

// Gerar número secreto entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 10;
let tentativasRestantes = maxTentativas;

// Selecionar elementos da página
const input = document.getElementById('palpite');
const botao = document.getElementById('botaoChutar');
const mensagem = document.getElementById('mensagem');
const tentativas = document.getElementById('tentativas');

tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

// Evento de clique no botão
botao.addEventListener('click', function () {
  let palpite = parseInt(input.value);

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = 'Por favor, digite um número entre 1 e 100.';
    return;
  }

  tentativasRestantes--;

  if (palpite === numeroSecreto) {
    mensagem.textContent = `Você acertou! O número secreto era ${numeroSecreto}. 🎉`;
    input.disabled = true;
    botao.disabled = true;
    tentativas.textContent = '';
  } else if (tentativasRestantes === 0) {
    mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}. 😢`;
    input.disabled = true;
    botao.disabled = true;
    tentativas.textContent = '';
  } else {
    if (palpite < numeroSecreto) {
      mensagem.textContent = 'O número secreto é maior!';
    } else {
      mensagem.textContent = 'O número secreto é menor!';
    }
    tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
  }

  input.value = '';
  input.focus();
});