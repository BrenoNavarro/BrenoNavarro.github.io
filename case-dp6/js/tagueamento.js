// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Eventos em todas as páginas
ga('create', 'UA-12345-6', 'none');
ga('set', 'checkProtocolTask', function() { /* nothing */ });
ga('send', 'pageview');

function addListener(element, type, callback) {
    if (element.addEventListener) element.addEventListener(type, callback);
    else if (element.attachEvent) element.attachEvent('on' + type, callback);
}

var entreContato = document.getElementById('contato');
var download = document.getElementById('download');

addListener(entreContato, 'click', function() {
    ga('send', 'event', {
        'eventCategory': 'menu',
        'eventAction': 'entre_em_contato',
        'eventLabel': 'link_externo',
    });
});

addListener(download, 'click', function() {
    ga('send', 'event', {
        'eventCategory': 'menu',
        'eventAction': 'download_pdf',
        'eventLabel': 'download_pdf',
    });
});


// Eventos da página Análise
if (location.pathname.includes('/analise')) {

    var cardId = '';

    function clickou(clickedId) {
        cardId = document.getElementById(clickedId);
        ga('send', 'event', {
            'eventCategory': 'analise',
            'eventAction': 'ver_mais',
            'eventLabel': cardId.getElementsByTagName('p')[0].textContent,
        });
    }
}

// Eventos da página sobre
if (location.pathname.includes('/sobre')) {

    var cardId = '';
    var enviarForm = document.getElementById('enviar');


    function clickou(clickedId) {

        cardId = document.getElementById(clickedId);
        cardId.onchange = function() {
            ga('send', 'event', {
                'eventCategory': 'contato',
                'eventAction': cardId.id,
                'eventLabel': 'preencheu',
            });
        };
    }

    addListener(enviarForm, 'click', function() {
        setTimeout(function() {
            ga('send', 'event', {
                'eventCategory': 'contato',
                'eventAction': 'enviado',
                'eventLabel': 'enviado',
            });
        }, 2000);
    })

};