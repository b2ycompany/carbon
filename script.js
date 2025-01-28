document.addEventListener("DOMContentLoaded", () => { const languageContainer = document.querySelector(".language-container"); const introContainer = document.querySelector(".intro-container"); const mainContainer = document.querySelector(".main-container"); const flags = document.querySelectorAll(".flag"); flags.forEach(flag => { flag.addEventListener("click", () => { const selectedLang = flag.dataset.lang; console.log(`Idioma selecionado: ${selectedLang}`); // Oculta a tela de idioma e exibe a animação languageContainer.style.display = "none"; introContainer.classList.remove("hidden"); 
