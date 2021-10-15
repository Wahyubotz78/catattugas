const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-300%";
}

//smooth scroll model header
var navigasi = document.querySelector("header");

window.addEventListener('scroll',function(){
    navigasi.classList.toggle('background-header',window.scrollY > 10)
})
