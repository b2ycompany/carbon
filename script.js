document.addEventListener("DOMContentLoaded", () => {
  const languageContainer = document.querySelector(".language-container");
  const introContainer = document.querySelector(".intro-container");
  const mainContainer = document.querySelector(".main-container");
  const flags = document.querySelectorAll(".flag");

  // Evento de clique nas bandeiras
  flags.forEach(flag => {
    flag.addEventListener("click", () => {
      const selectedLang = flag.dataset.lang;
      console.log(`Idioma selecionado: ${selectedLang}`);

      // Oculta tela de idioma e exibe animação
      languageContainer.classList.add("hidden");
      introContainer.classList.remove("hidden");

      // Transição para a tela principal após 3 segundos
      setTimeout(() => {
        introContainer.classList.add("hidden");
        mainContainer.classList.remove("hidden");
      }, 3000); // 3 segundos
    });
  });
});
