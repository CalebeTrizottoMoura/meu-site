// Animação simples ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  const titulo = document.getElementById("titulo");
  titulo.style.opacity = 0;
  titulo.style.transform = "translateY(-20px)";

  setTimeout(() => {
    titulo.style.transition = "all 1s ease";
    titulo.style.opacity = 1;
    titulo.style.transform = "translateY(0)";
  }, 200);
});
