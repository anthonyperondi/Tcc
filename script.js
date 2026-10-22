
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");

botaoMenu.addEventListener("click", function () {
    const menuAberto = menu.style.display === "block";

    if (menuAberto) {
        menu.style.display = "none";
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    } else {
        menu.style.display = "block";
        botaoMenu.setAttribute("aria-expanded", "true");
        botaoMenu.setAttribute("aria-label", "Fechar menu");
    }
});
