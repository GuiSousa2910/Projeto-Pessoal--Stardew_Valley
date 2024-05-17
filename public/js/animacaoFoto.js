function mostrar() {
    document.getElementById('1').style.display = 'none';
    document.getElementById('2').style.display = 'flex';
}
function desmostrar() {
    document.getElementById('2').style.display = 'none';
    document.getElementById('1').style.display = 'flex';
    document.getElementById('1').style.animation = 'none';
}

function mostrar1() {
    document.getElementById('1').style.display = 'flex';
    document.getElementById('2').style.display = 'none';
}
function desmostrar1() {
    document.getElementById('2').style.display = 'flex';
    document.getElementById('1').style.display = 'none';
    document.getElementById('1').style.animation = 'none';
}

function descer() {
    document.documentElement.style.scrollBehavior = 'smooth';
}