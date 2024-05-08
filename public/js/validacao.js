var cadastrarNomeBoolean = false;
var cadastrarFazendaBoolean = false;
var cadastrarEmailBoolean = false;
var cadastrarSenhaBoolean = false;
var cadastrarSenhaConfirmadaBoolean = false;

function exibirTextoNaTela(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function cadastrarNome() {
    var nome = input_nomeUsuario.value;

    if (nome == '') {
        document.getElementById('input_nomeUsuario').style.borderBottom = '3px solid red';
        cadastrarNomeBoolean = false;
    }
    
    else {
        document.getElementById('input_nomeUsuario').style.borderBottom = '3px solid #008000';
        cadastrarNomeBoolean = true;
    }
}

function cadastrarNomeFazenda() {
    var fazenda = input_fazenda.value;

    if (fazenda == '') {
        document.getElementById('input_fazenda').style.borderBottom = '3px solid red';
        cadastrarFazendaBoolean = false;

    }
    else {
        document.getElementById('input_fazenda').style.borderBottom = '3px solid #008000';
        cadastrarFazendaBoolean = true;
    }
}

function cadastrarEmail() {
    var email = input_email.value;
    var arroba = email.indexOf('@');
    var ponto = email.indexOf('.');
    var tamanho_email = email.length;
    var ultimaletra = email[tamanho_email - 1];
    var primeiraletra = email[0];

    if ((arroba == -1 || ponto == -1) || (ponto == arroba + 1) || (ultimaletra == '.') || (primeiraletra == '@')) {
        document.getElementById('input_email').style.borderBottom = '3px solid red';
        exibirTextoNaTela('alerta_email', 'ⓘ Precisa-se ter 1 arroba e 1 ponto');
        cadastrarEmailBoolean = false;
    }
    else {
        document.getElementById('input_email').style.borderBottom = '3px solid #008000';
        exibirTextoNaTela('alerta_email', '');
        cadastrarEmailBoolean = true;
    }
}

function cadastrarSenha() {
    var senha = document.getElementById('input_senha').value;

    if (senha.length >= 6) {
        document.getElementById('input_senha').style.borderBottom = '3px solid #008000';
        cadastrarSenhaBoolean = true;
        exibirTextoNaTela('alerta_senha', '');
    } else {
        document.getElementById('input_senha').style.borderBottom = '3px solid red';
        cadastrarSenhaBoolean = false;
        exibirTextoNaTela('alerta_senha', 'ⓘ Precisa-se ter 6 ou mais caracteres!');

    }
}

function cadastrarConfirmarSenha() {
    var senha = input_senha.value;
    var confirmar = input_confirmacao_senha.value;
    if (confirmar != senha) {
        document.getElementById('input_confirmacao_senha').style.borderBottom = '3px solid red';
        cadastrarSenhaConfirmadaBoolean = false;
        exibirTextoNaTela('alerta_confirme_senha', 'ⓘ Precisa ser igual a senha digitada anteriormente!');
    }
    else {
        document.getElementById('input_confirmacao_senha').style.borderBottom = '3px solid #008000';
        cadastrarSenhaConfirmadaBoolean = true;
        exibirTextoNaTela('alerta_confirme_senha', '');
    }
}

function validar() {

    // Enable/disable button based on validation and empty fields
    if (cadastrarNomeBoolean &&
        cadastrarFazendaBoolean &&
        cadastrarEmailBoolean &&
        cadastrarSenhaBoolean &&
        cadastrarSenhaConfirmadaBoolean) {
        document.getElementById('cadastrarBotao').removeAttribute('disabled');
    } else {
        document.getElementById('cadastrarBotao').setAttribute('disabled', true);
    }
}

