$(document).ready(function () {
    // Alternar Modo Escuro/Claro
    $('#theme-toggle').click(function () {
        $('body').toggleClass('dark-mode'); // Adiciona ou remove a classe `dark-mode` no body
        const icon = $('#theme-icon'); // Seleciona o ícone do botão
        if ($('body').hasClass('dark-mode')) {
            icon.removeClass('fa-sun').addClass('fa-moon'); // Modo escuro: ícone de lua
        } else {
            icon.removeClass('fa-moon').addClass('fa-sun'); // Modo claro: ícone de sol
        }
    });

    // Botão de Impressão do Currículo
    $('#print-cv').click(function () {
        $('#curriculo').removeClass('d-none'); // Mostra o currículo
        window.print(); // Aciona a impressão
        $('#curriculo').addClass('d-none'); // Oculta o currículo novamente
    });

    // Scroll para o topo
    $('#scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

  

