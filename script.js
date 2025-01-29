// Script para gerenciar telas, animações e seleção de idioma

// Variáveis
const languageContainer = document.querySelector('.language-container');
const introContainer = document.querySelector('.intro-container');
const mainContainer = document.querySelector('.main-container');
const flags = document.querySelectorAll('.flag');

// Função para animação de carregamento
function animateLoading() {
  const loadingContainer = document.querySelector('.loader');
  loadingContainer.innerHTML = `
    <div class="loading-scene">
      <div class="electric-car"></div>
      <div class="charging-station"></div>
      <div class="forest"></div>
    </div>
  `;
}

// Inicializa a animação ao mostrar a tela de intro
function showIntro() {
  languageContainer.classList.add('hidden');
  introContainer.classList.remove('hidden');
  animateLoading();

  setTimeout(() => {
    introContainer.classList.add('hidden');
    mainContainer.classList.remove('hidden');
  }, 4000);
}

// Clique para selecionar idioma
flags.forEach(flag => {
  flag.addEventListener('click', () => {
    const lang = flag.dataset.lang;
    setLanguage(lang);
    showIntro();
  });
});

// Função de seleção de idioma (mock)
function setLanguage(lang) {
  switch (lang) {
    case 'pt-BR':
      alert('Idioma selecionado: Português');
      break;
    case 'en-US':
      alert('Selected Language: English');
      break;
    case 'es-ES':
      alert('Idioma seleccionado: Español');
      break;
    default:
      alert('Idioma não suportado');
  }
}

// Scroll suave para seções
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animação ao rolar para elementos visíveis
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('section, .app').forEach(section => {
  observer.observe(section);
});
