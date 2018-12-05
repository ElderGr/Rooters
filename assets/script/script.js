const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuMobile = document.querySelector('.menu-mobile');

menuHamburguer.onclick = () => {
    menuHamburguer.classList.toggle('ativo');
    menuMobile.classList.toggle('ativo');
}
