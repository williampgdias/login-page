$(document).ready(function () {
  var listaPaisesObjeto = [
    {
      pais: 'Brasil',
      clima: 'Tropical',
      perigoso: 'Sim',
      populacao: '213 milhoes',
    },
    {
      pais: 'Irlanda',
      clima: 'Frio',
      perigoso: 'Nao',
      populacao: '4,94 milhoes',
    },
    {
      pais: 'Itália',
      clima: 'Tropical',
      perigoso: 'Não sei',
      populacao: '60,5 milhoes',
    },
  ];

  listaPaisesObjeto.map(function (item, indice) {
    console.log(item, indice);
  });

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
