const tela = document.getElementById('tela');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    tela.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    tela.classList.remove('active');
});