function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
  }
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000);
  
const featureCards = document.querySelectorAll('.feature-card');

window.addEventListener('scroll', function() {
  const featureCards = document.querySelectorAll('.feature-card');
  const windowHeight = window.innerHeight;
  featureCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowHeight - 100) {
      card.classList.add('visible');
    }
  });
});
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === slideIndex) {
      slide.classList.add('active');
    }
  });
  
  slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlides, 3000);


  
