verificaSeOUsuarioEstaLogado();

function logout() {
  localStorage.removeItem('usuarioLogado');
  document.location = 'login.html';
}

function verificaSeOUsuarioEstaLogado() {
  var usuarioLogado = localStorage.getItem('usuarioLogado');

  if (!usuarioLogado) {
    document.location = 'login.html';
  }
}

function mostraEmailUsuarioLogado() {
  var usuarioLogado = localStorage.getItem('usuarioLogado');

  var usuarioLogadoObject = JSON.parse(usuarioLogado);
  $('#userLogged').html(usuarioLogadoObject.email);
}

$(document).ready(function () {
  $('#logout').click(function () {
    logout();
  });
  mostraEmailUsuarioLogado();
});
