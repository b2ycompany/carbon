// Função para exibir a tela de seleção de idioma
function showLanguageSelection() {
  const languageContainer = document.querySelector('.language-container');
  languageContainer.classList.remove('hidden');
}

// Função para ocultar a tela de seleção de idioma
function hideLanguageSelection() {
  const languageContainer = document.querySelector('.language-container');
  languageContainer.classList.add('hidden');
  showIntroAnimation();
}

// Função para exibir a animação de carregamento
function showIntroAnimation() {
  const introContainer = document.querySelector('.intro-container');
  introContainer.classList.remove('hidden');
  setTimeout(() => {
    introContainer.classList.add('hidden');
    showMainContent();
  }, 3000); // Duração da animação de carregamento
}

// Função para exibir o conteúdo principal
function showMainContent() {
  document.body.classList.remove('hidden');
}

// Inicialização ao carregar a página
window.onload = function () {
  document.body.classList.add('hidden');
  showLanguageSelection();

  // Evento de clique para selecionar o idioma
  document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', hideLanguageSelection);
  });
};

// Função para animar a barra de carregamento elétrica
function animateLoadingBar() {
  const loadingBar = document.querySelector('.loading-bar');
  const electricCar = document.querySelector('.electric-car-icon');

  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    loadingBar.style.width = `${progress}%`;
    electricCar.style.left = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 30);
}

// Função para controlar o vídeo de fundo em cada seção
function setBackgroundVideos() {
  const heroSection = document.querySelector('#hero');
  const heroVideo = document.createElement('video');
  heroVideo.src = 'https://www.videvo.net/videvo_files/converted/2017_11/preview/171106_04_SolarPanels2_1080p.mp489368.webm';
  heroVideo.autoplay = true;
  heroVideo.loop = true;
  heroVideo.muted = true;
  heroSection.appendChild(heroVideo);
}

// Chamadas das funções principais
setBackgroundVideos();
animateLoadingBar();
