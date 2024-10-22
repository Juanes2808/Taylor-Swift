// Script para el botón "Saber más"
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    window.scrollTo({
        top: document.getElementById('biography').offsetTop,
        behavior: 'smooth'
    });
});
