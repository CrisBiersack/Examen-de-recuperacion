const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

let scrollPosition = 0;
const cardWidth = document.querySelector('.program-card').offsetWidth + 15; 

nextButton.addEventListener('click', () => {
  const maxScroll = carousel.scrollWidth - carousel.offsetWidth;
  scrollPosition = Math.min(scrollPosition + cardWidth * 3, maxScroll); 
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
});

prevButton.addEventListener('click', () => {
  scrollPosition = Math.max(scrollPosition - cardWidth * 3, 0); 
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
});
