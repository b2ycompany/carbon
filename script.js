document.addEventListener("DOMContentLoaded", () => {
  const languageContainer = document.querySelector(".language-container");
  const introContainer = document.querySelector(".intro-container");
  const mainContainer = document.querySelector(".main-container");
  const flags = document.querySelectorAll(".flag");

  // Adiciona evento de clique para cada bandeira
  flags.forEach(flag => {
    flag.addEventListener("click", () => {
      const selectedLang = flag.dataset.lang;
      console.log(`Idioma selecionado: ${selectedLang}`);

      // Oculta a tela de seleção de idioma
      languageContainer.classList.add("hidden");

      // Mostra a tela de animação
      introContainer.classList.remove("hidden");

      // Após 3 segundos, carrega o site principal
      setTimeout(() => {
        introContainer.classList.add("hidden");
        mainContainer.classList.remove("hidden");
      }, 3000); // Tempo em milissegundos (3 segundos)
    });
  });
});
