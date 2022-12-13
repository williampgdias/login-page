var listaDeFuncionarios = [
  {
    email: 'firstemail@mail.com',
    password: '123',
    name: 'John',
    phone_number: '(353)8333333333',
    role: 'Developer',
  },
  {
    email: 'secondemail@mail.com',
    password: '456',
    name: 'Marie',
    phone_number: '(353)8333333333',
    role: 'Manager',
  },
  {
    email: 'thirdemail@mail.com',
    password: '789',
    name: 'Willy',
    phone_number: '(353)8333333333',
    role: 'Intern',
  },
];

function fazerLogin(emailDigitadoNoFormulario, senhaDigitadaNoFormulario) {
  console.log(`Olá ${emailDigitadoNoFormulario}, você está tentando logar com a senha ${senhaDigitadaNoFormulario}`);
}

$(document).ready(function () {
  $('#form-login').submit(function (e) {
    e.preventDefault();

    var emailDigitado = $('#inputEmail').val();
    var senhaDigitada = $('#inputPassword').val();

    // fazerLogin(emailDigitado, senhaDigitada);

    if (emailDigitado == listaDeFuncionarios[0].email) {
      console.log('Email encontrado na lista 0');
    } else if (emailDigitado == listaDeFuncionarios[1].email) {
      console.log('Email encontrado na lista 1');
    } else if (emailDigitado == listaDeFuncionarios[2].email) {
      console.log('Email encontrado na lista 2');
    } else {
      console.log('Email não encontrado na lista');
    }
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
