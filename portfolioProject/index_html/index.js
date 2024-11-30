const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('#menu a');

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'block';
})
links.forEach(link => {
    link.addEventListener('click', () => {
    });
});