// Splash screen handler
window.addEventListener("load", function () {
  const splashScreen = document.querySelector(".splash-screen");
  setTimeout(() => {
    splashScreen.style.opacity = "0";
    setTimeout(() => splashScreen.style.display = "none", 600);
  }, 3000);
});

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach(anchor => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Form validation
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;

    if (name && email && message) {
      alert("Mensagem enviada com sucesso!");
      contactForm.reset();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
}

// Dynamic article loading
const articlesSection = document.querySelector(".blog");
if (articlesSection) {
  const articles = [
    { title: "A Importância da Tecnologia Sustentável", content: "Descubra como soluções tecnológicas podem ajudar a salvar o planeta." },
    { title: "Reduzindo Pegadas de Carbono", content: "Dicas e aplicações para reduzir sua pegada de carbono." },
    { title: "Carros Elétricos: O Futuro da Mobilidade", content: "Saiba mais sobre as vantagens dos veículos elétricos." }
  ];

  articles.forEach(article => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");
    articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
    articlesSection.appendChild(articleElement);
  });
}

// Map initialization (Google Maps API usage required)
function initMap() {
  const mapElement = document.getElementById("map");
  if (mapElement) {
    const officeLocation = { lat: -23.55052, lng: -46.633308 }; // Example coordinates (São Paulo, Brazil)
    const map = new google.maps.Map(mapElement, {
      zoom: 14,
      center: officeLocation,
    });
    new google.maps.Marker({
      position: officeLocation,
      map: map,
      title: "Nosso Escritório"
    });
  }
}

// Loading Google Maps script dynamically
if (document.getElementById("map")) {
  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

