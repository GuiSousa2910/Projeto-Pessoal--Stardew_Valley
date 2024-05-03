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

// function fixar(){
//     document.documentElement.style.position = 'fixed'
//     document.documentElement.style.backgroundColor = 'transparent' 
// }

window.sr = ScrollReveal({ reset: true });

sr.reveal('.setinha-direita', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.txt-stardew', {
    duration: 2500,
    distance: '200px',
    origin: 'left'
});

sr.reveal('.img-stardew', {
    duration: 2700,
    origin: 'right',
    distance: '200px'
});