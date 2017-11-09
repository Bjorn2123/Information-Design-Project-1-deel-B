//var slider = document.getElementById('myRange');
//
//var output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value
//
//// Update the current slider value (each time you drag the slider handle)
//slider.oninput = function() {
//    output.innerHTML = this.value;
//    
//}

var inactief = document.querySelector('#inactief');
var dieet = document.querySelector('#dieet');
var bloeddruk = document.querySelector('#bloeddruk');
var roken = document.querySelector('#roken');
var overgewicht = document.querySelector('#overgewicht');
var depressie = document.querySelector('#depressie');

var vrouw1 = document.querySelector('#vrouw1');
var man1 = document.querySelector('#man1');
var kind1 = document.querySelector('#kind1');

var vrouw2 = document.querySelector('#vrouw2');
var man2 = document.querySelector('#man2');
var kind2 = document.querySelector('#kind2');

kind1.style.opacity = 1;
man1.style.opacity = 1;
vrouw1.style.opacity = 1;
kind2.style.opacity = 1;
man2.style.opacity = 1;
vrouw2.style.opacity = 1;


function opacityInactief() {
    kind1.style.opacity -= 0.30;
    kind2.style.opacity -= 0.30;
    document.querySelector('#alinea').innerHTML = 'Te weinig beweging zorgt ervoor dat de cognitieve vaardigheid achteruit gaat en het verstand onscherp wordt.';

}

inactief.addEventListener('click', opacityInactief)
inactief.addEventListener('click', moveInactief)

function opacityRoken() {
    kind1.style.opacity -= 0.30;
    kind2.style.opacity -= 0.30;
    man2.style.opacity -= 0.30;
    vrouw1.style.opacity -= 0.30;
    document.querySelector('#alinea').innerHTML = 'Roken vergroot de kans op de ziekte van Alzheimer met 45%. Het is echter nooit te laat om te stoppen.';


}

roken.addEventListener('click', opacityRoken)
roken.addEventListener('click', moveRoken)

function opacityOvergewicht() {
    kind1.style.opacity -= 0.30;
    kind2.style.opacity -= 0.30;
    man2.style.opacity -= 0.30;
    vrouw1.style.opacity -= 0.30;
    document.querySelector('#alinea').innerHTML = 'Overgewicht zorgt ervoor dat men later problemen krijgt met de cognitieve vaardigheden. ';

}

overgewicht.addEventListener('click', opacityOvergewicht)
overgewicht.addEventListener('click', moveOvergewicht)

function opacityDieet() {
    kind1.style.opacity -= 0.30;
    kind2.style.opacity -= 0.30;
    man2.style.opacity -= 0.30;
    vrouw1.style.opacity -= 0.30;
    man1.style.opacity -= 0.30;
    vrouw2.style.opacity -= 0.30;
    document.querySelector('#alinea').innerHTML = 'Ongezond dieet zorgt ervoor dat het lichaam geen goede voedingsstoffen binnenkrijgt wat negatief invloed heeft op de hersenen.';


}

dieet.addEventListener('click', opacityDieet)
dieet.addEventListener('click', moveDieet)


function opacityBloeddruk() {
    kind1.style.opacity -= 0.30;
    kind2.style.opacity -= 0.30;
    man2.style.opacity -= 0.30;
    vrouw1.style.opacity -= 0.30;
    man1.style.opacity -= 0.30;
    vrouw2.style.opacity -= 0.30;
    document.querySelector('#alinea').innerHTML = 'Beschadigingen van de bloedvaten, door bijvoorbeeld hoge bloeddruk, kan de voortgang van de ziekte versnellen.';


}

bloeddruk.addEventListener('click', opacityBloeddruk)
bloeddruk.addEventListener('click', moveBloeddruk)


function opacityDepressie() {
    kind2.style.opacity -= 0.30;
    man2.style.opacity -= 0.30;
    vrouw1.style.opacity -= 0.30;
    man1.style.opacity -= 0.30;
    vrouw2.style.opacity -= 0.30;
    document.querySelector('#alinea').innerHTML = 'Een depressie zorgt er voor dat dementie in een eerder stadium is aan te tonen. Zo is een symptoom van een depressie dat je geheugen slechter functioneert.';

}

depressie.addEventListener('click', opacityDepressie)

depressie.addEventListener('click', moveDepressie);



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    kind1.style.opacity = 1;
    man1.style.opacity = 1;
    vrouw1.style.opacity = 1;
    kind2.style.opacity = 1;
    man2.style.opacity = 1;
    vrouw2.style.opacity = 1;

    output.innerHTML = this.value;
    if (this.value > 65 ) {
        kind1.style.opacity -= 0.20;
        kind2.style.opacity -= 0.20;
        moveKans1();
        
    }
    if (this.value > 70) {
        kind1.style.opacity -= 0.20;
        kind2.style.opacity -= 0.20;
        man2.style.opacity -= 0.20;
        vrouw1.style.opacity -= 0.20;
    }
    if (this.value > 75) {
        kind1.style.opacity -= 0.20;
        kind2.style.opacity -= 0.20;
        man2.style.opacity -= 0.20;
        vrouw1.style.opacity -= 0.20;
    }
    if (this.value > 80) {
        kind1.style.opacity -= 0.20;
        kind2.style.opacity -= 0.20;
        man2.style.opacity -= 0.20;
        vrouw1.style.opacity -= 0.20;
        moveKans2()
    }

    if (this.value > 85) {
         kind1.style.opacity -= 0.20;
        kind2.style.opacity -= 0.20;
        man2.style.opacity -= 0.20;
        vrouw1.style.opacity -= 0.20;
        man1.style.opacity -= 0.20;
        vrouw2.style.opacity -= 0.20;
    }

    if (this.value > 90) {
        man2.style.opacity -= 0.20;
        vrouw1.style.opacity -= 0.20;
        man1.style.opacity -= 0.40;
        vrouw2.style.opacity -= 0.40;
        moveKans3()
    }
    if (this.value > 95) {
        man1.style.opacity -= 0.40;
        vrouw2.style.opacity -= 0.40;
    }

}

function moveInactief() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 20) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
}

function moveBloeddruk() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 16) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
}

function moveRoken() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 45) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
}

function moveOvergewicht() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 74) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
}


function moveDieet() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 30) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
}


function moveDepressie() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 22) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
}

function moveKans1() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 8) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
}

function moveKans2() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 25) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
}


function moveKans3() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 40) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
}