$(document).ready(function () {
  // Exibir Currículo em Tela Cheia
  $('#print-cv').click(function () {
    $('#curriculo').addClass('show'); // Mostra o currículo em tela cheia
  });

  // Fechar Visualização do Currículo
  $('#close-cv').click(function () {
    $('#curriculo').removeClass('show'); // Oculta o currículo
  });

  // Scroll para o topo
  $('#scroll-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

  // Alternar Modo Escuro/Claro
  $('#theme-toggle').click(function () {
    $('body').toggleClass('dark-mode');
    const icon = $('#theme-icon');
    icon.toggleClass('fa-sun fa-moon');
  });
});
