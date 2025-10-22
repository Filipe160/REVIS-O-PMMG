document.addEventListener('DOMContentLoaded', function() {
const cards = document.querySelectorAll('.flip-card');


cards.forEach(card => {
const flipBtn = card.querySelector('.flip-btn');
const backBtn = card.querySelector('.back-btn');


flipBtn.addEventListener('click', () => {
card.classList.add('flipped');
});


backBtn.addEventListener('click', () => {
card.classList.remove('flipped');
});
});
});