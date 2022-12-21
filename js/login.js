verificaSeOUsuarioEstaLogado();

function fazerLogin(emailDigitadoNoFormulario, senhaDigitadaNoFormulario) {
  var usuarioValido = listaDeFuncionarios.find(function (funcionario) {
    return funcionario.email == emailDigitadoNoFormulario && funcionario.password == senhaDigitadaNoFormulario;
  });

  if (usuarioValido) {
    salvarUsuario(usuarioValido);
    document.location = 'lista-de-usuarios.html';
  } else {
    $('#form-login-alert-error').css('display', 'block');

    setTimeout(function () {
      $('#form-login-alert-error').css('display', 'none');
    }, 5000);
  }
}

function salvarUsuario(usuario) {
  var usuarioJSON = JSON.stringify(usuario);

  localStorage.setItem('usuarioLogado', usuarioJSON);
}

function verificaSeOUsuarioEstaLogado() {
  var usuarioLogado = localStorage.getItem('usuarioLogado');

  if (usuarioLogado) {
    document.location = 'lista-de-usuarios.html';
  }
}

$(document).ready(function () {
  $('#form-login').submit(function (e) {
    e.preventDefault();

    var emailDigitado = $('#inputEmail').val();
    var senhaDigitada = $('#inputPassword').val();

    fazerLogin(emailDigitado, senhaDigitada);
  });

  // EXIBIR SENHA DO FORMULÁRIO
  $('#exibir-senha').click(function () {
    var passwordField = $('#inputPassword');
    var passwordFieldType = passwordField.attr('type');

    if (passwordFieldType == 'password') {
      passwordField.attr('type', 'text');
    } else {
      passwordField.attr('type', 'password');
    }
  });
});
