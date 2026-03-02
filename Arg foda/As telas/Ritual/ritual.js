document.body.onclick = function() {
        var audio = document.getElementById("ritual-audio");
        audio.volume = 1; // Volume baixo para ela ter que chegar perto da caixa de som
        audio.play();
        
        // Efeito visual de interferência rápida ao clicar
        document.body.style.filter = "invert(1) contrast(2)";
        setTimeout(() => {
            document.body.style.filter = "none";
            document.querySelector('.aviso-sonoro').style.display = 'none';
        }, 100);
    };