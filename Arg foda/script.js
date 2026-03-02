// --- Efeito Místico na Logo ---
const logo = document.querySelector('.logo-img');

if (logo) {
    // Função para fazer o olho "pulsar" em intervalos irregulares
    const pulsarOlho = () => {
        // Aplica um brilho vermelho sutil (drop-shadow)
        logo.style.transition = 'filter 0.8s ease-in-out';
        logo.style.filter = 'drop-shadow(0px 0px 15px rgba(139, 0, 0, 0.8))';

        // Remove o brilho após 1 segundo
        setTimeout(() => {
            logo.style.filter = 'drop-shadow(0px 0px 5px rgba(0,0,0,0.5))';
        }, 1000);

        // Define o próximo pulso entre 3 a 7 segundos (imprevisível)
        const proximoIntervalo = Math.random() * (7000 - 3000) + 3000;
        setTimeout(pulsarOlho, proximoIntervalo);
    };

    // Inicia o efeito após o site carregar
    window.addEventListener('load', pulsarOlho);
}

// --- Seu código original continua abaixo ---
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});