// Seleção de idioma e animações
const languageContainer = document.querySelector(".language-container");
const introContainer = document.querySelector(".intro-container");
const mainContainer = document.querySelector(".main-container");
const flags = document.querySelectorAll(".flag");

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

// Carrinho elétrico correndo na pista durante o carregamento
function createLoadingScene() {
  const loadingScene = document.querySelector(".loading-scene");

  const track = document.createElement("div");
  track.classList.add("track");

  const car = document.createElement("div");
  car.classList.add("electric-car");

  loadingScene.appendChild(track);
  track.appendChild(car);
}

createLoadingScene();

// Animação do carrinho
function animateCar() {
  const car = document.querySelector(".electric-car");
  let position = 0;
  const trackWidth = document.querySelector(".track").offsetWidth;

  function drive() {
    position += 5;
    if (position > trackWidth) position = -100;
    car.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(drive);
  }

  drive();
}

animateCar();

// Interatividade ao menu
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

// Validação e submissão do formulário de contato
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (name && email && message) {
    alert("Obrigado pelo contato! Entraremos em breve em contato.");
    contactForm.reset();
  } else {
    alert("Por favor, preencha todos os campos do formulário.");
  }
});
