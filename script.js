document.addEventListener("DOMContentLoaded", () => { const languageContainer = document.querySelector(".language-container"); const introContainer = document.querySelector(".intro-container"); const mainContainer = document.querySelector(".main-container"); const languageButtons = document.querySelectorAll(".language-btn"); languageButtons.forEach(button => { button.addEventListener("click", () => { const selectedLang = button.dataset.lang; console.log(`Idioma selecionado: ${selectedLang}`); // Oculta a tela de idioma e exibe a animação languageContainer.style.display = "none"; introContainer.classList.remove("hidden"); // Exibe o site principal após a animação setTimeout(() => { introContainer.style.display = "none"; mainContainer.classList.remove("hidden"); }, 3000); // 3 segundos }); }); });
