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
    duration: 2000,
    delay: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.txt-stardew', {
    duration: 2500,
    delay: 300,
    distance: '100px',
    origin: 'left'
});

sr.reveal('.img-stardew', {
    duration: 3000,
    delay: 300,
    origin: 'right',
    distance: '100px'
});

sr.reveal('.oque-fazer-titulo', {
    duration: 2000,
    delay: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.pesca-img', {
    duration: 2000,
    delay: 300,
    origin: 'left',
    distance: '100px'
});

sr.reveal('.setinha-esquerda', {
    duration: 2000,
    delay: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.pesca-texto-img', {
    duration: 2000,
    delay: 300,
    origin: 'right',
    distance: '100px'
});

sr.reveal('.img-amizade', {
    duration: 2000,
    delay: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.seta-direita', {
    duration: 2000,
    delay: 300,
    origin: 'top',
    distance: '100px'
});

sr.reveal('.seta-esquerda', {
    duration: 2000,
    delay: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.amizade-textos', {
    duration: 2000,
    delay: 300,
    origin: 'top',
    distance: '100px'
});

sr.reveal('.plantacao-textos', {
    duration: 2000,
    delay: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.img-plantacao', {
    duration: 2000,
    delay: 300,
    origin: 'top',
    distance: '100px'
});

sr.reveal('.animais-textos', {
    duration: 2000,
    delay: 300,
    origin: 'left',
    distance: '100px'
});

sr.reveal('.animais-img', {
    duration: 2000,
    delay: 300,
    origin: 'right',
    distance: '100px'
});

sr.reveal('.mineracao-textos', {
    duration: 2500,
    delay: 300,
    origin: 'bottom',
    distance: '130px'
});

sr.reveal('.mineracao-img', {
    duration: 2000,
    delay: 300,
    origin: 'top',
    distance: '100px'
});

sr.reveal('.explorar-textos', {
    duration: 2000,
    delay: 300,
    origin: 'top',
    distance: '100px'
});

sr.reveal('.img-explorar', {
    duration: 2000,
    delay: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.oque-fazer-titulo', {
    duration: 2000,
    delay: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.oque-fazer-titulo', {
    duration: 2000,
    delay: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.desenvolvedor-img', {
    duration: 2000,
    delay: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.desenvolvedor-textos', {
    duration: 2000,
    delay: 300,
    origin: 'right',
    distance: '100px'
});