//functionality for hamburger menu

function hamburgerMenu() {
    var x = document.getElementById("main-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//functionality for color mode element

function colorMode() {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    document.querySelector('.name-logo').style.color = 'black';

    var j, k;
    j = document.querySelectorAll('.mode-text');

    for (k = 0; k < j.length; k++) {
        j[k].style.color = 'white';
    }

    var x, i;
    x = document.querySelectorAll('.mode-color');

    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = '#ff94b4';
        x[i].style.opacity = '1';
    }
}

//functionality to change the text on about section

var text = ['Karina Pichardo.', 'a Frontend Developer.']
var index = 0;
var element = document.getElementById('name-title');

window.setInterval(function textChange() {
    element.innerHTML = text[index];
    index++;

    if (index >= text.length) {
        index = 0;
    }
}, 1500);


//functionality for dots to display only one project at a time 

function firstDot() {
    document.getElementById('article1').style.display = 'block';
    document.getElementById('article2').style.display = 'none';
    document.getElementById('article3').style.display = 'none';
    document.getElementById('article4').style.display = 'none';
    document.getElementById('article5').style.display = 'none';
}

function secondDot() {
    document.getElementById('article2').style.display = 'block';
    document.getElementById('article1').style.display = 'none';
    document.getElementById('article3').style.display = 'none';
    document.getElementById('article4').style.display = 'none';
    document.getElementById('article5').style.display = 'none';
}

function thirdDot() {
    document.getElementById('article3').style.display = 'block';
    document.getElementById('article1').style.display = 'none';
    document.getElementById('article2').style.display = 'none';
    document.getElementById('article4').style.display = 'none';
    document.getElementById('article5').style.display = 'none';
}

function fourthDot() {
    document.getElementById('article4').style.display = 'block';
    document.getElementById('article1').style.display = 'none';
    document.getElementById('article2').style.display = 'none';
    document.getElementById('article3').style.display = 'none';
    document.getElementById('article5').style.display = 'none';

}

function fifthDot() {
    document.getElementById('article5').style.display = 'block';
    document.getElementById('article1').style.display = 'none';
    document.getElementById('article2').style.display = 'none';
    document.getElementById('article3').style.display = 'none';
    document.getElementById('article4').style.display = 'none';

}
