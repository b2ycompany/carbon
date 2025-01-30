// Suporte de troca de idioma e animações

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

    console.log(`Idioma selecionado: ${selectedLang}`);

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

// Animação do carrinho elétrico com imagem dinâmica
function createLoadingScene() {
  const loadingScene = document.querySelector(".loading-scene");

  const car = document.createElement("img");
  car.src = "https://www.svgrepo.com/show/274509/electric-car.svg";
  car.alt = "Carrinho Elétrico";
  car.classList.add("electric-car");

  const forest = document.createElement("div");
  forest.classList.add("forest");
  forest.style.backgroundImage = "url('https://images.unsplash.com/photo-1507838153414-b4b713384a76')";

  const chargingStation = document.createElement("div");
  chargingStation.classList.add("charging-station");
  chargingStation.style.backgroundImage = "url('https://www.svgrepo.com/show/401692/charging-station.svg')";

  loadingScene.appendChild(car);
  loadingScene.appendChild(forest);
  loadingScene.appendChild(chargingStation);
}

createLoadingScene();

// Adiciona interatividade ao menu
const menuLinks = document.querySelectorAll("header nav a");
menuLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#00ffcc";
    link.style.textShadow = "0px 0px 12px #00ffcc";
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "#fff";
    link.style.textShadow = "none";
  });
});

// Efeito de rolagem suave
menuLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Validação e envio do formulário de contato
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  contactForm.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
} 
