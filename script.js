// Referência aos elementos da interface
const languageContainer = document.querySelector(".language-container");
const introContainer = document.querySelector(".intro-container");
const mainContainer = document.querySelector(".main-container");
const flags = document.querySelectorAll(".flag");

const contentData = {
  "pt-BR": {
    heroTitle: "Tecnologia Sustentável",
    heroDescription: "Solucionando desafios com inovação e respeito ao meio ambiente",
    aboutTitle: "Sobre Nós",
    aboutText: "A Lion Solution é líder em soluções tecnológicas que promovem sustentabilidade e impacto positivo no meio ambiente.",
    contactTitle: "Entre em Contato Conosco",
    contactText: "Envie-nos uma mensagem ou visite nosso escritório.",
    footerText: "© 2025 Lion Solution | Tecnologia Sustentável para um Mundo Melhor"
  },
  "en-US": {
    heroTitle: "Sustainable Technology",
    heroDescription: "Solving challenges with innovation and environmental respect",
    aboutTitle: "About Us",
    aboutText: "Lion Solution is a leader in technological solutions that promote sustainability and positive environmental impact.",
    contactTitle: "Contact Us",
    contactText: "Send us a message or visit our office.",
    footerText: "© 2025 Lion Solution | Sustainable Technology for a Better World"
  },
  "es-ES": {
    heroTitle: "Tecnología Sostenible",
    heroDescription: "Resolviendo desafíos con innovación y respeto al medio ambiente",
    aboutTitle: "Sobre Nosotros",
    aboutText: "Lion Solution es líder en soluciones tecnológicas que promueven la sostenibilidad y un impacto positivo en el medio ambiente.",
    contactTitle: "Contáctenos",
    contactText: "Envíe un mensaje o visite nuestra oficina.",
    footerText: "© 2025 Lion Solution | Tecnología Sostenible para un Mundo Mejor"
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
  document.querySelector("#contact h2").textContent = contentData[lang].contactTitle;
  document.querySelector("#contact p").textContent = contentData[lang].contactText;
  document.querySelector("footer p").textContent = contentData[lang].footerText;
}

// Criar a cena de carregamento do carrinho elétrico
function createLoadingScene() {
  const loadingScene = document.querySelector(".loading-scene");

  const car = document.createElement("div");
  car.classList.add("electric-car");

  const forest = document.createElement("div");
  forest.classList.add("forest");

  const chargingStation = document.createElement("div");
  chargingStation.classList.add("charging-station");

  loadingScene.appendChild(car);
  loadingScene.appendChild(forest);
  loadingScene.appendChild(chargingStation);
}

createLoadingScene();

// Interatividade do menu
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

// Enviar mensagem de contato
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  if (name && email && message) {
    alert(`Obrigado, ${name}! Recebemos sua mensagem e entraremos em contato em breve.`);
    contactForm.reset();
  } else {
    alert("Por favor, preencha todos os campos obrigatórios.");
  }
});

// Integração do mapa com localização
function initializeMap() {
  const mapContainer = document.querySelector("#map-container");
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8161827577885!2d-46.84269122376904!3d-23.579022268484213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03388888880f%3A0xa734f9287d81ac8f!2sTorre%20Jacarand%C3%A1!5e0!3m2!1sen!2sbr!4v123456789";
  iframe.width = "100%";
  iframe.height = "300";
  iframe.style.border = "0";
  iframe.loading = "lazy";
  mapContainer.appendChild(iframe);
}

initializeMap();
