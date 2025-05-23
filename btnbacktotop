// Pega o botão pelo ID
const backToTopBtn = document.getElementById("backToTopBtn");

// Função que rola a página para o topo
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Opcional: mostrar o botão só quando o usuário rolar para baixo
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};