document.addEventListener("DOMContentLoaded", function () {
  const languageContainer = document.querySelector(".language-container");
  const introContainer = document.querySelector(".intro-container");
  const mainContent = document.querySelector("main");
  const flags = document.querySelectorAll(".flag");
  const car = document.querySelector(".electric-car");
  const loadingBar = document.querySelector(".loading-bar");

  // Exibição do seletor de idiomas
  flags.forEach((flag) => {
    flag.addEventListener("click", () => {
      languageContainer.classList.add("hidden");
      showLoadingScreen();
    });
  });

  // Função para exibir a tela de loading
  function showLoadingScreen() {
    introContainer.classList.remove("hidden");
    setTimeout(hideLoadingScreen, 4000);
  }

  // Oculta a tela de loading e exibe o conteúdo principal
  function hideLoadingScreen() {
    introContainer.classList.add("hidden");
    mainContent.classList.remove("hidden");
  }

  // Animação do carrinho durante o loading
  function animateLoading() {
    car.style.animation = "drive 4s linear infinite";
    loadingBar.style.animation = "loadingBar 4s linear infinite";
  }

  animateLoading();
});


