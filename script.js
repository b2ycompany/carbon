document.addEventListener("DOMContentLoaded", function () {
  const languageContainer = document.querySelector(".language-container");
  const introContainer = document.querySelector(".intro-container");
  const mainContainer = document.querySelector(".main-container");
  const flags = document.querySelectorAll(".flag");

  flags.forEach(flag => {
    flag.addEventListener("click", () => {
      languageContainer.style.display = "none";
      introContainer.classList.remove("hidden");
      setTimeout(() => {
        introContainer.style.display = "none";
        mainContainer.classList.remove("hidden");
      }, 3000);
    });
  });

  // Rolagem Suave
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  console.log("Scripts carregados!");
});
