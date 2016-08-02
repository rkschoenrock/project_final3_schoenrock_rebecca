$(document).ready(function () {

    $('#rateYo').rateYo({
        rating: 3.6
    });

    Placeholdem( document.querySelectorAll('[placeholder]') );
    var fadeElems = document.body.querySelectorAll('.fade'),
        fadeElemsLength = fadeElems.length,
        i = 0,
        interval = 50;

    function incFade() {
        if (i < fadeElemsLength) {
            fadeElems[ i ].className += ' fade-load';
            i++;
            setTimeout(incFade, interval);
        }
    }
    setTimeout(incFade, interval);
});
