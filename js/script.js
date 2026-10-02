document.addEventListener
    ("DOMContentLoaded",()=>{
        const menuResponsivo = document.getElementById("menuResponsivo");
        const navMenu =  document.getElementById("nav-menu");
        menuResponsivo.addEventListener("click", ()=>{
            navMenu.classList.toggle("active")

        });//Fica menu responsivo
});//Final função evento
