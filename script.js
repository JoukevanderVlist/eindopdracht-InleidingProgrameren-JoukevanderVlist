let honger = 100; // Begin met 100
let toilet = 100; // Begin met 100
let geluk = 100; // Begin met 100
let gameover = 0; // 0 = spel bezig, 1 = spel over
let clock1, clock2, clock3; // Maak de drie klokken aan om later up te daten
let tamagotchiName = ""; // Begin met een lege naam

document.getElementById("voeren").onclick = HongerBar; // Als er op de knop voeren wordt geklikt, wordt de functie HongerBar uitgevoerd
document.getElementById("toilet").onclick = ToiletBar; // Als er op de knop toilet wordt geklikt, wordt de functie ToiletBar uitgevoerd
document.getElementById("spelen").onclick = GelukBar; // Als er op de knop spelen wordt geklikt, wordt de functie GelukBar uitgevoerd

function startGame() { // Functie om het spel te starten
    tamagotchiName = document.getElementById("tamagotchiName").value; 

    if (tamagotchiName === "") {
        alert("Voer een naam in voor je Tamagotchi."); // Zorg ervoor dat er een naam wordt ingevoerd
        return;
    }

    // Updtae de titel met de gegeven tamagotchi titel
    document.getElementById("title").innerText = "Tamagotchi: " + tamagotchiName;

    document.getElementById("Naam").style.display = "none"; // Als de naam is ingevoerd wordt het invoerveld van de naam verborgen
    // De regels hieronder zorgen ervoor dat de elementen pas zichtbaar worden na het starten van het spel
    document.getElementById("Tamagotchi").style.display = "block";
    document.getElementById("StatHonger").style.display = "block";
    document.getElementById("StatToilet").style.display = "block";
    document.getElementById("StatGeluk").style.display = "block";
    document.getElementById("Buttons").style.display = "block";

    // Pas de eerder gedefinieerde klokken aan met elk een eigen tijd interval
    clock1 = setInterval(AfnameHonger, 200);
    clock2 = setInterval(AfnameToilet, 300);
    clock3 = setInterval(AfnameGeluk, 250);
}

// Functie om te controleren of het spel over is
// Het spel is over als alle vier de waarden gelijk zijn aan 0
function gameovercheck() {
    if (honger === 0 && toilet === 0 && geluk === 0 && gameover === 0) {
        alert("Je Tamagotchi heeft het niet overleefd");
        gameover++;
    }
}

// Per keer dat er op de voer knop geklikt wordt komt er 2 bij, alleen als de huidige waarde kleiner of gelijk is aan 99 en niet 0
function HongerBar() {
    if (honger <= 99 && honger !== 0) honger += 2;
}

// Per keer dat er toilet knop wordt geklikt komt er 2 bij, alleen als de huidige waarde kleiner of gelijk is aan 99 en niet 0
function ToiletBar() {
    if (toilet <= 99 && toilet !== 0) toilet += 2;
}

// Per keer dat er geluk knop wordt geklikt komt er 2 bij, alleen als de huidige waarde kleiner of gelijk is aan 99 en niet 0
function GelukBar() {
    if (geluk <= 99 && geluk !== 0) geluk += 2;
}

// Functie voor het afnemen van de voortgangsbalk
function AfnameHonger() {
    if (honger === 0) { // Als honger gelijk is aan 0
        clearInterval(clock1); // Zorgt ervoor dat de honger niet nog verder afneemt
        alert("Je Tamagotchi heeft honger"); // Alert om aan te geven dat de tamagotchi honger heeft
        gameovercheck(); // Checken of het spel over is
    } else { // Als honger niet gelijk is aan 0
        honger--; // Honger -1
        document.getElementById("HongerBar").value = honger; // De progress bar updaten naar de nieuwe waarde 
    }
}

// Functie voor het afnemen van de voortgangsbalk
function AfnameToilet() {
    if (toilet === 0) { // Als toilet gelijk is aan 0
        clearInterval(clock2); // Zorgt ervoor dat het toilet niet nog verder afneemt
        alert("Je Tamagotchi moet naar de wc"); // Alert om aan te geven dat de tamagotchi naar het toilet moet
        gameovercheck(); // Checken of het spel over is
    } else { // Als toilet niet gelijk is aan 0
        toilet--; // Toilet -1
        document.getElementById("ToiletBar").value = toilet; // De progress bar updaten naar de nieuwe waarde 
    }
}

// Functie voor het afnemen van de voortgangsbalk
function AfnameGeluk() {
    if (geluk === 0) { // Als toilet gelijk is aan 0
        clearInterval(clock3); // Zorgt ervoor dat het geluk niet nog verder afneemt
        alert("Je Tamagotchi is ongelukkig"); // Alert om aan te geven dat de tamagotchi ongelukkig is
        gameovercheck(); // Checken of het spel over is
    } else { // Als geluk niet gelijk is aan 0
        geluk--; // Geluk -1
        document.getElementById("GelukBar").value = geluk; // De progress bar updaten naar de nieuwe waarde 
    }
}
