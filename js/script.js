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
        });
        
        dots.forEach((dot) =>{
            dot.addEventListener("click", (e)=>{
                const index = parseInt(e.target.getAttribute("data-index"));
                showSlide(index);
                stopSlide();
                startSlide();
            });
        });
        
        startSlide();

        //Validação do formulário
        const  contatoForm =document.getElementById("contatoForm");
        console.log("nome")
        const  nome = document.getElementById("nome");
        const  email = document.getElementById("email");
        const  mensagem = document.getElementById("mensagem");
        function isValidEmail(email){
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
            return emailRegex.test(email);
        }

        contatoForm.addEventListener("submit", (event) =>{
            event.preventDefault();
            clearError();
            let isValid = true;
            //Validação do campo nome(verificar mínimo 3 Caracteres)
            if(nome.value.trim().length < 3){
                showError(nome,"O nome deve ter no mínimo 3 caracteres");
                isValid = false;
            } 
            //Validação do campo email
            if(!isValidEmail(email.value.trim())){
                showError(email,"Insira um email valido ");
                isValid = false;
            }
            //Validação do mensegem 
            if(mensagem.value.trim().length < 10){
                showError(mensagem,"Insira uma mensagem valida")
                isValid = false;
            }
            //Validar se estiver tudo certo
            if(isValid){
                clearError();
                showToast("Mensagem Enviada com sucesso!");
                contatoForm.reset();

            }
        });
        function showToast(mensagem){
            const toast = document.getElementById("toast");
            const toastMensagem = document.getElementById("toastMensagem");
            toastMensagem.textContent = mensagem;
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show")
            }, 3000);
        }
        //Remover a borda vermelha dos inputs
        [nome, email, mensagem].forEach((input) =>{
            input.addEventListener("input", () =>{
                clearFieldError(input);
            });
        })
        function showError(inputElement,mensagem){
            const formGroup = inputElement.parentElement;
            inputElement.classList.add("input-error");
            clearFieldError(inputElement);
            const errorMensagem = document.createElement("small");
            errorMensagem.className = "error-text";
            errorMensagem.inmerText = mensagem;
            formGroup.appendChild(errorMensagem);
        }
        //Remover erro individual do campo
        function clearFieldError(inputElement){
            const formGroup = inputElement.parentElement;
            inputElement.classList.remove("input-error");
            const removerErro = formGroup.querySelector("error-text");
            if(removerErro){
                removerErro.remove();
            }    
        }
        //Remover TODOS os erros do formulario
        function clearError(){
            document.querySelectorAll(".error-text").forEach((el) => el.remove());
            document.querySelectorAll(".input-error").forEach((el) => el.classList.remove("input-error"));

        }
});//Final função evento
