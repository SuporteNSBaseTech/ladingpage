// Função para o menu responsivo
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Função de animação ao clicar no botão "Comprar Agora"
const buyButtons = document.querySelectorAll('.btn-buy');

// Simular ação de compra ao clicar no botão
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Exibir uma animação de feedback ao clicar no botão
        button.textContent = 'Processando...';
        button.style.backgroundColor = '#ffc107'; // Mudando a cor para dar feedback

        // Simular um processo de compra (aqui apenas uma ação temporária)
        setTimeout(() => {
            button.textContent = 'Compra Finalizada!';
            button.style.backgroundColor = '#28a745'; // Indicando que foi finalizado com sucesso
        }, 2000); // 2 segundos para simular o processo de compra
    });
});



// Função para fazer o scroll suave ao clicar nos links do menu
const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevenir comportamento padrão do link
        const section = document.querySelector(link.getAttribute('href')); // Selecionar a seção correspondente
        section.scrollIntoView({ behavior: 'smooth' }); // Fazer o scroll suave
    });
});

// Botão de Login
document.querySelector('.login-btn').addEventListener('click', function() {
    alert('Entrando na área do cliente!');
});

// Animação ao rolar a página
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.features-section, .pricing-section, .video-section');
    const scrollPos = window.pageYOffset + window.innerHeight - 100;

    sections.forEach(section => {
        if (scrollPos > section.offsetTop) {
            section.classList.add('show');
        }
    });
});


document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function() {
        alert('Redirecionando para a página de compra.'); // Ajustar com o redirecionamento real
    });
});


// Botão de Login
document.querySelector('.login-btn').addEventListener('click', function() {
    alert('Entrando na área do cliente!');
});

// Animação ao rolar a página
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.features-section, .pricing-section, .video-section');
    const scrollPos = window.pageYOffset + window.innerHeight - 100;

    sections.forEach(section => {
        if (scrollPos > section.offsetTop) {
            section.classList.add('show');
        }
    });
});


const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover-effect-active');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-effect-active');
    });
});



 // Seleciona todos os vídeos com a classe 'hover-play-video'
 const videos = document.querySelectorAll('.hover-play-video');

 videos.forEach(video => {
     // Quando o mouse entra na área do vídeo, ele começa a tocar
     video.addEventListener('mouseenter', () => {
         video.muted = true; // Garante que o vídeo está mudo
         video.play(); // Inicia a reprodução
     });

     // Quando o mouse sai da área do vídeo, ele pausa
     video.addEventListener('mouseleave', () => {
         video.pause(); // Pausa o vídeo
         video.currentTime = 0; // Reinicia o vídeo
     });
 });

 document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".hover-play-video");

    videos.forEach(video => {
        video.play().catch(error => {
            console.log("Autoplay bloqueado pelo navegador:", error);
        });
    });
});



