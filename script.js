// Função para manipular o carregamento e animações
window.addEventListener("DOMContentLoaded", () => {
  const introContainer = document.querySelector(".intro-container");
  const loadingBar = document.querySelector(".loading-bar");
  const loadingPercentage = document.querySelector(".loading-percentage");
  const mainContainer = document.querySelector(".main-container");
  const languageContainer = document.querySelector(".language-container");

  let progress = 0;

  // Simulação do carregamento
  function updateLoading() {
    if (progress <= 100) {
      loadingBar.style.width = `${progress}%`;
      loadingPercentage.textContent = `${progress}%`;
      progress++;
      setTimeout(updateLoading, 30); // Velocidade do carregamento
    } else {
      // Esconde a tela de carregamento e mostra a página principal
      introContainer.classList.add("hidden");
      mainContainer.classList.remove("hidden");
    }
  }

  // Controle do seletor de idioma
  const flags = document.querySelectorAll(".flag");
  flags.forEach(flag => {
    flag.addEventListener("click", () => {
      languageContainer.classList.add("hidden");
      introContainer.classList.remove("hidden");
      updateLoading(); // Inicia o carregamento
    });
  });
});
