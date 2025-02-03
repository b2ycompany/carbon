document.addEventListener("DOMContentLoaded", function () {
  const languageContainer = document.querySelector(".language-container");
  const introContainer = document.querySelector(".intro-container");
  const mainContent = document.querySelector(".main-container");
  const loadingBar = document.querySelector(".loading-bar");
  const loadingText = document.querySelector(".loading-percentage");

  let loadPercentage = 0;

  // Exibir o seletor de idioma
  document.querySelectorAll(".flag").forEach((flag) => {
    flag.addEventListener("click", () => {
      languageContainer.classList.add("hidden");
      showLoadingScreen();
    });
  });

  // Exibir a tela de loading
  function showLoadingScreen() {
    introContainer.classList.remove("hidden");
    animateLoading();
  }

  // Ocultar o loading e exibir a home
  function hideLoadingScreen() {
    introContainer.classList.add("hidden");
    mainContent.classList.remove("hidden");
  }

  // Animação de carregamento com raios e porcentagem
  function animateLoading() {
    const interval = setInterval(() => {
      if (loadPercentage >= 100) {
        clearInterval(interval);
        hideLoadingScreen();
      } else {
        loadPercentage++;
        loadingText.textContent = `${loadPercentage}%`;
        loadingBar.style.width = `${loadPercentage}%`;
      }
    }, 40); // Velocidade do carregamento
  }
});
