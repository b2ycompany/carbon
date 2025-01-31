// Atualização completa para animações do carrinho elétrico e suporte visual

const languageContainer = document.querySelector(".language-container");
const introContainer = document.querySelector(".intro-container");
const mainContainer = document.querySelector(".main-container");
const flags = document.querySelectorAll(".flag");

// Conteúdo dinâmico para tradução
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

flags.forEach(flag => {
  flag.addEventListener("click", () => {
    const selectedLang = flag.dataset.lang;
    languageContainer.style.display = "none";
    introContainer.classList.remove("hidden");

    setTimeout(() => {
      introContainer.style.display = "none";
      mainContainer.classList.remove("hidden");
      applyContent(selectedLang);
    }, 3000);
  });
});

function applyContent(lang) {
  document.querySelector("#hero h1").textContent = contentData[lang].heroTitle;
  document.querySelector("#hero p").textContent = contentData[lang].heroDescription;
  document.querySelector("#about h2").textContent = contentData[lang].aboutTitle;
  document.querySelector("#about p").textContent = contentData[lang].aboutText;
  document.querySelector("footer p").textContent = contentData[lang].footerText;
}

// Criação da cena de carregamento com animação do carrinho
function createLoadingScene() {
  const loadingScene = document.querySelector(".loading-scene");

  const road = document.createElement("div");
  road.classList.add("road");

  const car = document.createElement("div");
  car.classList.add("electric-car");

  loadingScene.appendChild(road);
  loadingScene.appendChild(car);
}

createLoadingScene();

// Menu com rolagem suave
const menuLinks = document.querySelectorAll("header nav a");
menuLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Imagens dinâmicas nas seções
function loadDynamicImages() {
  const heroSection = document.querySelector("#hero");
  heroSection.style.backgroundImage = "url('https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1950&q=80')";

  const aboutSection = document.querySelector("#about");
  aboutSection.style.backgroundImage = "url('https://images.unsplash.com/photo-1502920917128-1aa500764b01?auto=format&fit=crop&w=1950&q=80')";
  aboutSection.style.backgroundSize = "cover";
}

loadDynamicImages();

// Efeito de animação de entrada suave para seções
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});
