// Animação simples ao carregar a página.
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

// Animação para o formulário.
document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const url = "https://script.google.com/macros/s/AKfycbzuVvxymDJY6AslHa2Wc32khykBOLmPO_H9jzA2FJSwqkqBjqsWjsPqnx1mIGDVXsXtEQ/exec";

  const formData = new FormData(form);
  const botao = document.getElementById("btnEnviar");
  const mensagem = document.getElementById("mensagem");

  botao.disabled = true;
  botao.innerText = "Enviando...";

  fetch(url, {
    method: "POST",
    body: formData
  })
    .then(() => {
      mensagem.innerText = "✔️ Enviado com sucesso!";
      mensagem.style.color = "green";
      form.reset();
    })
    .catch(() => {
      mensagem.innerText = "❌ Erro ao enviar. Tente novamente.";
      mensagem.style.color = "red";
    })
    .finally(() => {
      botao.disabled = false;
      botao.innerText = "Enviar";
    });
});
