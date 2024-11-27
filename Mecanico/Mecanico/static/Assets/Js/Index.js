document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: false,  // Removido a navegação por setas
    touchMove: false,  // Desabilita o movimento por arrasto
    simulateTouch: false,  // Desabilita o toque simulado no desktop
    on: {
      slideChange: function () {
        updateIndicators(this.realIndex);
      }
    }
  });

  // Função para atualizar os indicadores
  function updateIndicators(index) {
    var indicators = document.querySelectorAll('.indicador');

    // Remover a classe 'active' de todos os indicadores
    indicators.forEach(function (indicator) {
      indicator.classList.remove('active');
    });

    // Adicionar a classe 'active' ao indicador correspondente
    indicators[index].classList.add('active');
  }

  // Função para mudar para o slide correto ao clicar nos indicadores
  var indicadores = document.querySelectorAll('.indicador');
  indicadores.forEach(function(indicator, index) {
    indicator.addEventListener('click', function() {
      // Com o loop habilitado, precisamos mapear corretamente o índice
      var slideIndex = index;  // Pega o índice real do indicador
      mySwiper.slideTo(slideIndex);  // Muda para o slide correspondente
    });
  });
});



    document.querySelectorAll('.img-servico').forEach(img => {
        const originalSrc = img.src; // Salva o caminho original da imagem
        const hoverSrc = img.getAttribute('data-hover'); // Obtém o caminho da imagem de hover

        img.addEventListener('mouseenter', () => {
            img.src = `../static/Assets/Img/${hoverSrc}`; // Muda para a imagem de hover
        });

        img.addEventListener('mouseleave', () => {
            img.src = originalSrc; // Retorna para a imagem original
        });
    });



   const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');

// Função para clonar os slides e garantir o movimento contínuo
function cloneSlides() {
  slides.forEach(slide => {
    const clone = slide.cloneNode(true); // Clona o slide
    slideTrack.appendChild(clone);       // Adiciona o clone ao final
  });
}

// Clonar os slides assim que a página carregar
cloneSlides();





 function contadorAnimadoDois(id, valorFinal, duracao) {
            const elemento = document.getElementById(id);
            let valorAtual = 0;
            const incremento = valorFinal / duracao * 100;

            const intervalo = setInterval(function() {
                valorAtual += incremento;
                if (valorAtual >= valorFinal) {
                    clearInterval(intervalo);
                    valorAtual = valorFinal;
                }
                elemento.textContent = "+" + Math.floor(valorAtual);
            }, 100);
        }

        // Função para iniciar a animação quando o elemento entrar na área visível
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Quando o elemento está visível, animar o contador
                    contadorAnimadoDois("contadorDois", 30, 2000); // Altere o número final e a duração conforme necessário
                    observer.unobserve(entry.target); // Para o observer depois que a animação acontecer
                }
            });
        }, {
            threshold: 0.5 // A animação começa quando 50% do elemento estiver visível
        });

        // Observar o elemento
        observer.observe(document.getElementById("contadorDois"));


function animarContador(idElemento, valorFinal, duracaoAnimacao) {
    const elementoContador = document.getElementById(idElemento);
    let valorAtual = 0;
    const incremento = valorFinal / duracaoAnimacao * 100;

    const intervaloAnimacao = setInterval(function() {
        valorAtual += incremento;
        if (valorAtual >= valorFinal) {
            clearInterval(intervaloAnimacao);
            valorAtual = valorFinal;
        }
        // Usando toLocaleString() para formatar o número com separadores de milhar
        elementoContador.textContent = "+" + Math.floor(valorAtual).toLocaleString();
    }, 100);
}

// Função para iniciar a animação quando o elemento entrar na área visível
const observerContador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            // Quando o elemento está visível, animar o contador
            animarContador("contador", 20000, 2000); // Exemplo com número final em 1 milhão
            observer.unobserve(entrada.target); // Para o observer depois que a animação acontecer
        }
    });
}, {
    threshold: 0.5 // A animação começa quando 50% do elemento estiver visível
});

// Observar o elemento
observerContador.observe(document.getElementById("contador"));

const sliderTrack = document.querySelector(".slider-track2");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const cards = document.querySelectorAll(".card");
const cardWidth = cards[0].offsetWidth + 20; // Largura do card + margem (gap)
const totalCards = cards.length;

// Atualizar largura do track para comportar os cards
sliderTrack.style.width = `${cardWidth * totalCards}px`;

// Começar com os cards `1, 2, 3` visíveis
let currentIndex = 0;
sliderTrack.style.transform = `translateX(-${cardWidth * currentIndex}px)`;

// Função para mover o slider
const moveToIndex = (index) => {
  sliderTrack.style.transition = "transform 0.4s ease-in-out";
  sliderTrack.style.transform = `translateX(-${cardWidth * index}px)`;
};

// Botão para avançar
nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - 3) {
    currentIndex++;
  } else {
    currentIndex = 0; // Voltar ao primeiro card
  }
  moveToIndex(currentIndex);
});

// Botão para retroceder
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 3; // Ir para o último conjunto visível
  }
  moveToIndex(currentIndex);
});





