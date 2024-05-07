var cadastrarNomeBoolean = false;
var cadastrarFazendaBoolean = false;
var cadastrarEmailBoolean = false;
var cadastrarSenhaBoolean = false;
var cadastrarSenhaConfirmadaBoolean = false;

function cadastrarNome() {
    var nome = input_nomeUsuario.value;

    if (nome == '') {
        document.getElementById('input_nomeUsuario').style.borderBottom = '3px solid red';

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

    if ((arroba == -1 || ponto == -1) || (ponto < arroba) || (ponto == arroba + 1) || (ultimaletra == '.') || (primeiraletra == '@')) {
        document.getElementById('input_email').style.borderBottom = '3px solid red';
    }
    else {
        document.getElementById('input_email').style.borderBottom = '3px solid #008000';
        cadastrarEmailBoolean = true;
    }
}

if (cadastrarNomeBoolean == true &&
    cadastrarFazendaBoolean == true &&
    cadastrarEmailBoolean == true) {
    document.getElementById('cadastrarBotao').removeAttribute('disabled');
}
