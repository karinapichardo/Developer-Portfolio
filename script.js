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

    const colorModeDiv = document.querySelector('.color-mode');
    const colorModeTitle = document.querySelector('.color-title');

    document.body.style.backgroundColor = 'black';
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

    if (colorModeDiv.style.display === 'none') {
        colorModeTitle.textContent = 'Light Mode';
    } else {
        colorModeTitle.textContent = 'Dark Mode';
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


//functionality for dots to display only one article at a time 

const articles = document.querySelectorAll('.articles');

function articleDisplay(indexNum) {
    for (let i = 0; i < articles.length; i++) {
        if (articles[i] === articles[indexNum]) {
            articles[i].style.display = 'block';
        } else {
            articles[i].style.display = 'none';
        }
    }
}

const dots = document.querySelectorAll('.dot');
//console.log(dots[0]);

for (let i = 0; i < dots.length; i++) {
    if (dots[i]) {
        articleDisplay([i]);
    }

}

//function firstDot() {
//    return articleDisplay(0);
//}
//
//function secondDot() {
//    return articleDisplay(1);
//}
//
//function thirdDot() {
//    return articleDisplay(2);
//}
//
//function fourthDot() {
//    return articleDisplay(3);
//}
//
//function fifthDot() {
//    return articleDisplay(4);
//}
