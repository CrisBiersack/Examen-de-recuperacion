const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

let scrollPosition = 0;
const cardWidth = document.querySelector('.program-card').offsetWidth + 15; // Ancho de la tarjeta + margen

nextButton.addEventListener('click', () => {
  const maxScroll = carousel.scrollWidth - carousel.offsetWidth;
  scrollPosition = Math.min(scrollPosition + cardWidth * 3, maxScroll); // Avanza 3 tarjetas
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
});

prevButton.addEventListener('click', () => {
  scrollPosition = Math.max(scrollPosition - cardWidth * 3, 0); // Retrocede 3 tarjetas
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
});
