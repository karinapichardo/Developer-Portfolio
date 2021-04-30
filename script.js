function hamburgerMenu() {
    var x = document.getElementById("main-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function colorMode() {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    document.querySelector('.cert-link').style.color = '#ffc200';

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

function firstDot() {
    document.getElementById('project1').style.display = 'block';
    document.getElementById('project2').style.display = 'none';
    document.getElementById('project3').style.display = 'none';
    document.getElementById('project4').style.display = 'none';
    document.getElementById('project5').style.display = 'none';
}

function secondDot() {
    document.getElementById('project2').style.display = 'block';
    document.getElementById('project1').style.display = 'none';
    document.getElementById('project3').style.display = 'none';
    document.getElementById('project4').style.display = 'none';
    document.getElementById('project5').style.display = 'none';
}

function thirdDot() {
    document.getElementById('project3').style.display = 'block';
    document.getElementById('project1').style.display = 'none';
    document.getElementById('project2').style.display = 'none';
    document.getElementById('project4').style.display = 'none';
    document.getElementById('project5').style.display = 'none';
}

function fourthDot() {
    document.getElementById('project4').style.display = 'block';
    document.getElementById('project1').style.display = 'none';
    document.getElementById('project2').style.display = 'none';
    document.getElementById('project3').style.display = 'none';
    document.getElementById('project5').style.display = 'none';

}
