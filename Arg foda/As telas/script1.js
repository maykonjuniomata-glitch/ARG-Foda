const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        // 1. Impede o formulário de enviar sozinho antes de conferir a senha
        e.preventDefault(); 
        
        const pass = document.getElementById('password').value;
        const error = document.getElementById('error-msg');

        if (pass === "0303-2009") {
            // 2. SE A SENHA ESTIVER CERTA:
            // Usamos o comando de redirecionamento mais simples do navegador
            // O './' força o navegador a olhar APENAS na pasta atual
            location.replace("./ritual.html");
        } else {
            // 3. SE ESTIVER ERRADA:
            error.style.display = "block";
        }

    })