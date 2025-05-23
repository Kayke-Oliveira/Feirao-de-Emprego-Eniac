const btnAbrirMenu = document.getElementById("btn-abrir-menu");
const menuMobile = document.getElementById("menu-mobile");
const btnFecharMenu = document.querySelector(".btn-fechar");
const overlay = document.querySelector(".overlay-menu");

// Abrir menu
btnAbrirMenu.addEventListener("click", () => {
    menuMobile.classList.add("ativo");
    overlay.style.display = "block";
    document.body.classList.add("no-scroll");  // bloqueia o scroll
});

// Fechar menu com botão
btnFecharMenu.addEventListener("click", () => {
    menuMobile.classList.remove("ativo");
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll"); // libera o scroll
});

// Fechar menu clicando no overlay
overlay.addEventListener("click", () => {
    menuMobile.classList.remove("ativo");
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll"); // libera o scroll
});
