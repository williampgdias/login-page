$(document).ready(function () {
  $('#form-login').submit(function (e) {
    e.preventDefault();

    var emailDigitado = $('#inputEmail').val();
    var senhaDigitada = $('#inputPassword').val();

    console.log(`Olá ${emailDigitado}, você está tentando logar com a senha ${senhaDigitada}`);
  });

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
