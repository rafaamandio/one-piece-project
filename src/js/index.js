const botoes = document.querySelectorAll(".botao");
const botaoLogo = document.querySelectorAll(".logo");
const personagens = document.querySelectorAll(".personagem");



function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  if (personagemSelecionado) {
    personagemSelecionado.classList.remove("selecionado");
  }
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }
}

function desselecionarLogo() {
  const logoSelecionado = document.querySelector(".logo.selecionado");
  if (logoSelecionado) {
    logoSelecionado.classList.remove("selecionado");
  }
}

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    desselecionarPersonagem();


    botao.classList.add("selecionado");
    personagens[indice].classList.add("selecionado");
  });
});


botaoLogo.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    desselecionarPersonagem();
    desselecionarLogo();

    const imagemPrincipal = document.querySelector(".personagem.principal");
    imagemPrincipal.classList.add("selecionado");
    botaoLogo[indice].classList.add("selecionado");
  });
});


