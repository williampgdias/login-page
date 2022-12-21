function logout() {
  localStorage.removeItem('usuarioLogado');
  document.location = 'index.html';
}

function verificaSeOUsuarioEstaLogado() {
  var usuarioLogado = localStorage.getItem('usuarioLogado');

  if (!usuarioLogado) {
    document.location = 'index.html';
  }
}

function mostraEmailUsuarioLogado() {
  var usuarioLogado = localStorage.getItem('usuarioLogado');

  var usuarioLogadoObject = JSON.parse(usuarioLogado);
  $('#userLogged').html(usuarioLogadoObject.email);
}

function preencheListaDeUsuarios() {
  var table = $('#users-table');

  listaDeFuncionarios.map(function (user, indexArray) {
    table.find('tbody').append(`
      <tr>
        <td>${user.email}</td>
        <td>${user.name}</td>
        <td><a href="detalharUsuario.html?email=${user.email}">Visualizar</a></td>
      </tr>
    `);
  });
}

verificaSeOUsuarioEstaLogado();

$(document).ready(function () {
  mostraEmailUsuarioLogado();
  preencheListaDeUsuarios();

  $('#logout').click(function () {
    logout();
  });
});
