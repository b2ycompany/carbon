document.addEventListener("DOMContentLoaded", () => {
  const languageContainer = document.querySelector(".language-container");
  const introContainer = document.querySelector(".intro-container");
  const mainContainer = document.querySelector(".main-container");
  const flags = document.querySelectorAll(".flag");

  // Texts for different languages
  const translations = {
    "pt-BR": {
      welcome: "Bem-vindo à Lion Solution",
      selectLanguage: "Selecione seu idioma:",
      loading: "Carregando Lion Solution...",
      sustainableTech: "Tecnologia Sustentável",
      solvingChallenges: "Solucionando desafios com inovação e respeito ao meio ambiente",
      aboutUs: "Sobre Nós",
      aboutText: "A Lion Solution é líder em soluções tecnológicas que promovem sustentabilidade e impacto positivo no meio ambiente.",
      ourApps: "Nossos Aplicativos",
      app1: { title: "B2Y Carbon", description: "Gerencie os quilômetros rodados e acompanhe o sequestro de carbono." },
      app2: { title: "B2Y Frequency", description: "Aplicativo de vibrações terapêuticas para bem-estar." },
      app3: { title: "B2Y Sales", description: "Classificados para vendas, compras e investimentos em negócios." },
      footer: "© 2025 Lion Solution | Tecnologia Sustentável para um Mundo Melhor"
    },
    "en-US": {
      welcome: "Welcome to Lion Solution",
      selectLanguage: "Select your language:",
      loading: "Loading Lion Solution...",
      sustainableTech: "Sustainable Technology",
      solvingChallenges: "Solving challenges with innovation and respect for the environment",
      aboutUs: "About Us",
      aboutText: "Lion Solution is a leader in technological solutions that promote sustainability and positive environmental impact.",
      ourApps: "Our Applications",
      app1: { title: "B2Y Carbon", description: "Manage traveled kilometers and track carbon sequestration." },
      app2: { title: "B2Y Frequency", description: "Therapeutic vibration application for well-being." },
      app3: { title: "B2Y Sales", description: "Classifieds for sales, purchases, and business investments." },
      footer: "© 2025 Lion Solution | Sustainable Technology for a Better World"
    },
    "es-ES": {
      welcome: "Bienvenido a Lion Solution",
      selectLanguage: "Seleccione su idioma:",
      loading: "Cargando Lion Solution...",
      sustainableTech: "Tecnología Sostenible",
      solvingChallenges: "Resolviendo desafíos con innovación y respeto al medio ambiente",
      aboutUs: "Sobre Nosotros",
      aboutText: "Lion Solution es líder en soluciones tecnológicas que promueven sostenibilidad e impacto positivo en el medio ambiente.",
      ourApps: "Nuestras Aplicaciones",
      app1: { title: "B2Y Carbon", description: "Administre los kilómetros recorridos y controle la captura de carbono." },
      app2: { title: "B2Y Frequency", description: "Aplicación de vibraciones terapéuticas para el bienestar." },
      app3: { title: "B2Y Sales", description: "Clasificados para ventas, compras e inversiones empresariales." },
      footer: "© 2025 Lion Solution | Tecnología Sostenible para un Mundo Mejor"
    }
  };

  // Event listener for flag selection
  flags.forEach(flag => {
    flag.addEventListener("click", () => {
      const selectedLang = flag.dataset.lang;
      console.log(`Idioma selecionado: ${selectedLang}`);

      // Update the page content based on selected language
      updateContent(translations[selectedLang]);

      // Oculta a tela de seleção de idioma
      languageContainer.style.display = "none";

      // Mostra a tela de animação
      introContainer.classList.remove("hidden");

      // Após 3 segundos, carrega o site principal
      setTimeout(() => {
        introContainer.style.display = "none";
        mainContainer.classList.remove("hidden");
      }, 3000);
    });
  });

  // Function to update content dynamically
  function updateContent(content) {
    document.querySelector(".language-content h1").textContent = content.welcome;
    document.querySelector(".language-content p").textContent = content.selectLanguage;
    document.querySelector(".intro-container h1").textContent = content.loading;
    document.querySelector("#hero h1").textContent = content.sustainableTech;
    document.querySelector("#hero p").textContent = content.solvingChallenges;
    document.querySelector("#about h2").textContent = content.aboutUs;
    document.querySelector("#about p").textContent = content.aboutText;
    document.querySelector("#apps h2").textContent = content.ourApps;

    const apps = document.querySelectorAll(".app");
    apps[0].querySelector("h3").textContent = content.app1.title;
    apps[0].querySelector("p").textContent = content.app1.description;
    apps[1].querySelector("h3").textContent = content.app2.title;
    apps[1].querySelector("p").textContent = content.app2.description;
    apps[2].querySelector("h3").textContent = content.app3.title;
    apps[2].querySelector("p").textContent = content.app3.description;

    document.querySelector("footer p").textContent = content.footer;
  }
});
