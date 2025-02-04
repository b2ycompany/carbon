const languageContainer = document.querySelector(".language-container");
const introContainer = document.querySelector(".intro-container");
const mainContainer = document.querySelector(".main-container");
const flags = document.querySelectorAll(".flag");

// Referência ao conteúdo dinâmico para traduzir
const contentData = {
  "pt-BR": {
    "heroTitle": "Tecnologia Sustentável",
    "heroDescription": "Solucionando desafios com inovação e respeito ao meio ambiente",
    "aboutTitle": "Sobre Nós",
    "aboutText": "A Lion Solution é líder em soluções tecnológicas que promovem sustentabilidade e impacto positivo no meio ambiente.",
    "footerText": "© 2025 Lion Solution | Tecnologia Sustentável para um Mundo Melhor"
  },
  "en-US": {
    "heroTitle": "Sustainable Technology",
    "heroDescription": "Solving challenges with innovation and environmental respect",
    "aboutTitle": "About Us",
    "aboutText": "Lion Solution is a leader in technological solutions that promote sustainability and positive environmental impact.",
    "footerText": "© 2025 Lion Solution | Sustainable Technology for a Better World"
  },
  "es-ES": {
    "heroTitle": "Tecnología Sostenible",
    "heroDescription": "Resolviendo desafíos con innovación y respeto al medio ambiente",
    "aboutTitle": "Sobre Nosotros",
    "aboutText": "Lion Solution es líder en soluciones tecnológicas que promueven la sostenibilidad y un impacto positivo en el medio ambiente.",
    "footerText": "© 2025 Lion Solution | Tecnología Sostenible para un Mundo Mejor"
  }
};

// Adiciona evento de clique para cada bandeira
flags.forEach(flag => {
  flag.addEventListener("click", () => {
    const selectedLang = flag.dataset.lang;

    // Oculta a tela de seleção de idioma
    languageContainer.style.display = "none";

    // Mostra a tela de animação
    introContainer.classList.remove("hidden");

    // Após 3 segundos, carrega o site principal com conteúdo traduzido
    setTimeout(() => {
      introContainer.style.display = "none";
      mainContainer.classList.remove("hidden");
      applyContent(selectedLang);
    }, 3000); // Tempo em milissegundos (3 segundos)
  });
});

function applyContent(lang) {
  document.querySelector("#hero h1").textContent = contentData[lang].heroTitle;
  document.querySelector("#hero p").textContent = contentData[lang].heroDescription;
  document.querySelector("#about h2").textContent = contentData[lang].aboutTitle;
  document.querySelector("#about p").textContent = contentData[lang].aboutText;
  document.querySelector("footer p").textContent = contentData[lang].footerText;
}

// Animação do carrinho elétrico
function createLoadingScene() {
  const loadingScene = document.querySelector(".loading-scene");

  const car = document.createElement("div");
  car.classList.add("electric-car");

  const chargingStation = document.createElement("div");
  chargingStation.classList.add("charging-station");

  loadingScene.appendChild(car);
  loadingScene.appendChild(chargingStation);
}

createLoadingScene();
