var fiveKList = document.getElementById('fivek'); //selects #fivek on homepage
var finalCountdown = document.createElement('div'); //creates a div
finalCountdown.innerHTML = "<h3 id='jsh3'>It's the Final Countdown</h3>"; //adds h3 to the div
fiveKList.appendChild(finalCountdown);

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
