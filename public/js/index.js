function mostrar() {
    document.getElementById('1').style.display = 'none';
    document.getElementById('2').style.display = 'flex';
}
function desmostrar() {
    document.getElementById('2').style.display = 'none';
    document.getElementById('1').style.display = 'flex';
    document.getElementById('1').style.animation = 'none';
}

function descer() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

window.sr = ScrollReveal({ reset: true });

sr.reveal('.setinha-direita', {
    duration: 1200,
    origin: 'bottom'
});

sr.reveal('.txt-stardew', {
    duration: 2200,
    distace: '90px',
    origin: 'left'
});

sr.reveal('.img-stardew', {
    duration: 2700,
    // delay: 500,
    // distace: '90px',
    origin: 'right'
});