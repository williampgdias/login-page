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
  var usuarioValido = listaDeFuncionarios.find(function (funcionario, posicaoNaLista) {
    return funcionario.email == emailDigitadoNoFormulario && funcionario.password == senhaDigitadaNoFormulario;
  });

  if (usuarioValido) {
    console.log('Usuário foi encontrado.');
  } else {
    console.log('Usuário não encontrado.');
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
