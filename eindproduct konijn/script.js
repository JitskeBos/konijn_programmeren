console.log("KONIJN YEY");

var konijnHoofd = document.getElementById("hoofdKonijn");
var konijnLijf = document.getElementById("lijfKonijn");
var konijnSchoen = document.getElementById("schoenKonijn");

var konijn = document.getElementById("konijn");

var resetKnop = document.getElementById("reset");
var speelKnop = document.getElementById("play");

const hoofdOptions = document.querySelectorAll('.hoofd-table img');
const lijfOptions = document.querySelectorAll('.lijf-table img');
const schoenOptions = document.querySelectorAll('.schoenen-table img');

var container = document.getElementById("container");
var konijnContainer = document.getElementById("konijn-container");

var tabel = document.getElementById("tabel");

var spelenNP = document.getElementById("spelen");

var wortel = document.getElementById("wortel");

var h1 = document.querySelector("h1");

// "tweede pagina kleding"
var konijnHoofd2 = document.getElementById("hoofdKonijn2");
var konijnLijf2 = document.getElementById("lijfKonijn2");
var konijnSchoen2 = document.getElementById("schoenKonijn2");

var konijn2 = document.getElementById("konijn2");

var konijnKleding2 = document.getElementById("konijnKleding 2");

var titelPlay = document.getElementById("titelPlay");

// knoppen 2e pagina
var voedsel = document.getElementById("voedsel");
var skateboard = document.getElementById("skateboard");
var geefNaam = document.getElementById("namen");
var terugKnop = document.getElementById("terug");

var hulpTekst = document.getElementById("hulpTekst");
var skateImg = document.getElementById("skateImg");
var naamKonijn = document.getElementById("naamKonijn");

var terug2 = document.getElementById("terug2");

var hulpTekst2 = document.getElementById("hulpTekst2");

// array variabele
var namen = ["Joep", "Jeppe", "Puk", "Miepje"]
var pEl = document.getElementById("naam");
var klikHier = document.getElementById("klikHier");
var extratje = document.getElementById("extratje");


// konijn laadt zonder kleding
function loadSite() {
    konijnHoofd.style.display = "none";
    konijnLijf.style.display = "none";
    konijnSchoen.style.display = "none";
    spelenNP.style.display = "none";
}
addEventListener("load", loadSite);


// script voor hoofd
// Opgezet met hulp van Wiebe Ranzijn
hoofdOptions.forEach(function (optieHoofd) {
    optieHoofd.addEventListener('click', function () {
        selectHoofd(optieHoofd.src)
    })
})

function selectHoofd(imageSrc) {
    if (konijnHoofd.src === imageSrc) {
        konijnHoofd.src = '';
        konijnHoofd.style.display = 'none';
        konijnHoofd2.src = '';
    } else {
        konijnHoofd.src = imageSrc;
        konijnHoofd.style.display = 'block';
        konijnHoofd2.src = imageSrc;
        // konijnHoofd2.style.display = "none";
    }
}

// script voor lijf
// Opgezet met hulp van Wiebe Ranzijn

lijfOptions.forEach(function (optieLijf) {
    optieLijf.addEventListener('click', function () {
        selectLijf(optieLijf.src)
    })
})

function selectLijf(imageSrc) {
    if (konijnLijf.src === imageSrc) {
        konijnLijf.src = '';
        konijnLijf.style.display = 'none';
        konijnLijf2.src = '';
    } else {
        konijnLijf.src = imageSrc;
        konijnLijf.style.display = 'block';
        konijnLijf2.src = imageSrc;
        // konijnLijf2.style.display = "none";
    }
}

// script voor schoenen
// Opgezet met hulp van Wiebe Ranzijn

schoenOptions.forEach(function (optieSchoen) {
    optieSchoen.addEventListener('click', function () {
        selectSchoen(optieSchoen.src)
    })
})

function selectSchoen(imageSrc) {
    if (konijnSchoen.src === imageSrc) {
        konijnSchoen.src = '';
        konijnSchoen.style.display = 'none';
        konijnHoofd2.src = '';
    } else {
        konijnSchoen.src = imageSrc;
        konijnSchoen.style.display = 'block';
        konijnSchoen2.src = imageSrc;
        // konijnSchoen2.style.display = "none";
    }
}

function reset() {
    console.log("IK WIL DAT HET WERKT");
    konijnHoofd.style.display = "none";
    konijnLijf.style.display = "none";
    konijnSchoen.style.display = "none";
}

resetKnop.addEventListener("click", reset);

function play() {
    console.log("AAH");
    container.style.display = "none"

    resetKnop.style.display = "none"
    speelKnop.style.display = "none"

    spelenNP.style.display = "block";

    konijnHoofd2.style.display = "block"
    konijnSchoen2.style.display = "block"
    konijnLijf2.style.display = "block"

    console.log(konijnHoofd2.src);

// Opgezet na tip van leraar
    if (konijnHoofd2.getAttribute('src') === '') {
        konijnHoofd2.style.display = "none";
    }

    if (konijnLijf2.getAttribute('src') === '') {
        konijnLijf2.style.display = "none";
    }

    if (konijnSchoen2.getAttribute('src') === '') {
        konijnSchoen2.style.display = "none";
    }

    wortel.style.display = "none";
    hulpTekst.style.display = "none";
    skateImg.style.display = "none";
    naamKonijn.style.display = "none";
    hulpTekst2.style.display = "none";
}
speelKnop.addEventListener("click", play);

// Functies over wortels
function wortelKrijgen() {
    console.log("ik wil een wortel");
    wortel.style.display = "block";

    voedsel.style.display = "none";
    skateboard.style.display = "none";
    terugKnop.style.display = "none";
    geefNaam.style.display = "none";

    hulpTekst.style.display = "block";

    titelPlay.textContent = "Feed your konijn"
}
voedsel.addEventListener("click", wortelKrijgen);

// Functie om wortel te kunnen slepen
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("image", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("image");
    // ev.target.appendChild(document.getElementById(data)); Hierdoor kwam de wortel niet meer terug

    var spraak = document.getElementById("spraak");

    if (spraak.style.display === "block") {
        spraak.style.display = "none"
    } else {
        spraak.style.display = "block"
    }

    wortel.style.display = "none";
    hulpTekst.style.display = "none";

    setTimeout(() => {
        wortel.style.display = "none"
        spraak.style.display = "none"
        voedsel.style.display = "block";
        skateboard.style.display = "block";
        terugKnop.style.display = "block";
        geefNaam.style.display = "block";
        titelPlay.textContent = "Play with your konijn"
    }, 3800);

    document.getElementById("audio1").play();
    

}

function skaten() {
    console.log("ik sta op een skateboard");

    const container = document.querySelector('.konijn-doos')

    console.log("ik ben aan het skaten")

    container.classList.add('skaten');
    skateImg.style.display = "block";
    voedsel.style.display = "none";
    skateboard.style.display = "none";
    terugKnop.style.display = "none";
    geefNaam.style.display = "none";
    titelPlay.textContent = "Your konijn is skateboaring"
    hulpTekst2.style.display = "block";

    // Timeout functie om dingen weer terug te plaatsen
    setTimeout(() => {
        skateImg.style.display = "none";
        voedsel.style.display = "block";
        skateboard.style.display = "block";
        terugKnop.style.display = "block";
        geefNaam.style.display = "block";
        container.classList.remove("skaten"); //Als dit er niet staat gaat het konijn skaten zonder board als er na Terug weer op Play wordt gedrukt
        titelPlay.textContent = "Play with your konijn"
        hulpTekst2.style.display = "none";
    }, 5000);

    document.getElementById("audio2").play();

}
skateboard.addEventListener("click", skaten);

// functies arrays
function naamKrijgen(){
    console.log("ik krijg een naam");
    naamKonijn.style.display = "block";

    geefNaam.style.display = "none";
    voedsel.style.display = "none";
    skateboard.style.display = "none";
    terugKnop.style.direction = "none";
    konijn2.style.display = "none";
    terugKnop.style.display = "none";
    konijnHoofd2.style.display = "none";
    konijnLijf2.style.display = "none";
    konijnSchoen2.style.display = "none";

    titelPlay.textContent = "Give your konijn a name"
}

geefNaam.addEventListener("click", naamKrijgen);



function welkeNaam(parameter){
    console.log("wat wordt mijn naam?")

    var randomGetal = Math.random() * 4;

    randomGetal = Math.floor(randomGetal)

    pEl.textContent = namen[randomGetal];

    if (randomGetal === 2 || randomGetal === 3) {
        extratje.textContent = " (may she rest in peace)";
    }
    if (randomGetal === 1) {
        extratje.textContent = " (may he rest in peace)";
    }
    if (randomGetal === 0) {
        extratje.textContent = "";
    }
}

klikHier.addEventListener("click", welkeNaam);

function terugSpelen(){
    console.log("terug naar spelen");
    naamKonijn.style.display = "none";

    geefNaam.style.display = "block";
    voedsel.style.display = "block";
    skateboard.style.display = "block";
    terugKnop.style.direction = "block";
    konijn2.style.display = "block";
    terugKnop.style.display = "block";

    titelPlay.textContent = "Play with your konijn"

    konijnHoofd2.style.display = "block"
    konijnSchoen2.style.display = "block"
    konijnLijf2.style.display = "block"

    if (konijnHoofd2.getAttribute('src') === '') {
        konijnHoofd2.style.display = "none";
    }

    if (konijnLijf2.getAttribute('src') === '') {
        konijnLijf2.style.display = "none";
    }

    if (konijnSchoen2.getAttribute('src') === '') {
        konijnSchoen2.style.display = "none";
    }
}

terug2.addEventListener("click", terugSpelen);


function terug() {
    console.log("terug");
    container.style.display = "flex"     // De container is met display flex gemaakt, anders komt het op de hele pagina te staan

    resetKnop.style.display = "block"
    speelKnop.style.display = "block"

    spelenNP.style.display = "none";

    konijnHoofd2.style.display = "none"
    konijnSchoen2.style.display = "none"
    konijnLijf2.style.display = "none"


    if (konijnHoofd2.getAttribute('src') === '') {
        konijnHoofd2.style.display = "none";
    }

    if (konijnLijf2.getAttribute('src') === '') {
        konijnLijf2.style.display = "none";
    }

    if (konijnSchoen2.getAttribute('src') === '') {
        konijnSchoen2.style.display = "none";
    }

    wortel.style.display = "none";
    hulpTekst.style.display = "none";
    skateImg.style.display = "none";
}
terugKnop.addEventListener("click", terug);

// titels wijzigen


