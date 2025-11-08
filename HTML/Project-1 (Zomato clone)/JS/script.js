// Add smooth fade-in animation on scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    } else {
      card.style.opacity = 0;
      card.style.transform = "translateY(50px)";
    }
  });
});

// Hero input animation (focus effect)
const input = document.querySelector('.hero input');
if (input) {
  input.addEventListener('focus', () => {
    input.style.boxShadow = '0 0 10px #cb202d';
  });
  input.addEventListener('blur', () => {
    input.style.boxShadow = 'none';
  });
}