$(document).ready(function () {

    $('#rateYo').rateYo({
        rating: 3.6
    });

    Placeholdem(document.querySelectorAll('[placeholder]') );
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

    var contactArticle = document.getElementsByClassName('contact')[0];
    var hours = document.createElement('div');
    hours.innerHTML = '<h3>Hours</h3><p>Mon-Thurs <span class="bold">12pm-8pm</span>, Fri-Sun <span class="bold">10am-10pm</span></p>';
    contactArticle.appendChild(hours);
});


var fiveKList = document.getElementById('fivek'); //selects #fivek on homepage
var finalCountdown = document.createElement('div'); //creates a div
finalCountdown.innerHTML = "<h3 id='jsh3'>It's the Final Countdown</h3>"; //adds h3 to the div
fiveKList.appendChild(finalCountdown);

$('#jsh3').click(function () {
    $(' .looseseal').animate({
        height: ['toggle', 'swing']
    }, 2000, function () {
    });
});
