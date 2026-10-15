document.addEventListener
    ("DOMContentLoaded",()=>{
        const menuResponsivo = document.getElementById("menuResponsivo");
        const navMenu = document.getElementById("nav-menu");
        menuResponsivo.addEventListener("click", ()=>{
            navMenu.classList.toggle("active")
        });//Fica menu responsivo
        const navLinks = document.querySelectorAll(".nav-menu a ");
        navLinks.forEach((link) => {
            link.addEventListener("click", () =>{
            navMenu.classList.remove("active");
            }); 
        });

        const slides = document.querySelectorAll( ".carousel-slide");
        const dots = document.querySelectorAll(".dot");
        const prevBtn = document.getElementById("prevBtn");
        console.log("prevBtn", prevBtn);
        const nextBtn = document.getElementById("nextBtn");
        console.log("nextBtn", nextBtn);
        let slideAtual = 0;
        let slideIntervalo;
        
        function showSlide(index){
            console.log("Entrou na função");
            slides.forEach((slide) =>
            slide.classList.remove("active"));
            dots.forEach((dot) => dot.classList.remove("active"));
            
            slideAtual = (index + slides.length)
                % slides.length;
            slides[slideAtual].classList.add("active");
            dots[slideAtual].classList.add("active");
        }
        function nextSlide(){
            showSlide(slideAtual + 1);
        }
        function prevSlide(){
            showSlide(slideAtual - 1);
        }
        function startSlide(){
            slideIntervalo = setInterval(nextSlide, 5000);
        }    
        function stopSlide(){
               // console.log("valor intervalo", slideIntervalo) 
            clearInterval(slideIntervalo);
        }
        
        nextBtn.addEventListener("click", () => {
            console.log("Função next");
            nextSlide();
            stopSlide();
            startSlide();
        });
        prevBtn.addEventListener("click", () =>{
            console.log("função prev")
            prevSlide();
            stopSlide();
            startSlide();      
        })
         startSlide();
     
});//Final função evento
