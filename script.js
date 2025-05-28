// Constanten
// Het bord met 9 vakjes, elk vakje begint leeg
const bord = ['', '', '', '', '', '', '', '', ''];

// Alle mogelijke winnende combinaties van bordindexen
const winningConditions = [
  [0,1,2], // bovenste rij
  [3,4,5], // middelste rij
  [6,7,8], // onderste rij
  [0,3,6], // eerste kolom
  [1,4,7], // tweede kolom
  [2,5,8], // derde kolom
  [0,4,8], // diagonaal van linksboven naar rechtsonder
  [2,4,6]  // diagonaal van rechtsboven naar linksonder
];

// Selecteer alle vakjes op het bord (html elementen met class 'cell')
const cells = document.querySelectorAll('.cell');

// Selecteer het tekstvak waar we berichten weergeven
const message = document.getElementById('message');

// Selecteer de resetknop om het spel opnieuw te starten
const resetknop = document.getElementById('resetknop');



// Variabelen
// Het spel begint met speler 'X'
let currentPlayer = 'X';

// Geeft aan of het spel nog actief is of al voorbij
let gameActive = true;



// Functies
// Wordt uitgevoerd als er op een vakje geklikt wordt
// https://www.w3schools.com/jsref/event_onclick.asp
function handleCellClick(e) {
  // Haal de index van het aangeklikte vakje op
  // https://www.scaler.com/topics/event-target-javascript/
  const index = e.target.getAttribute('cell-index');

  // Als het vakje niet meer leeg is of het spel is niet meer actief, stop dan
  if (bord[index] !== '' || !gameActive) return;

  // Zet het symbool van de huidige speler op het bord en in het vakje, X of O
  bord[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  // Controleer of de huidige speler gewonnen heeft
  if (checkWin()) {
    message.textContent = `Speler ${currentPlayer} wint! `;
    gameActive = false; // Stop het spel
    return;
  }

  // Controleer voor gelijkspel
  // Als het bord geen lege vakjes meer bevat en er geen winnaar is gekomen uit 'checkWin' dan is het gelijkspel
  if (!bord.includes('')) {
    message.textContent = `Gelijkspel!`;
    gameActive = false;
    return;
  }

  // Wissel van speler
  // Als de huidige speler, speler X is, wordt de volgende speler, speler O, 
  // als het niet speler X is, wordt de volgende speler, speler X
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  // Laat weten wie nu aan de beurt is
  message.textContent = `Speler ${currentPlayer} is aan de beurt`;
}

// Controleert of de huidige speler heeft gewonnen
function checkWin() {
  return winningConditions.some(condition => {
    return condition.every(index => bord[index] === currentPlayer);
  });
}

// Zet het spel terug naar het begin, maak alle cellen leeg en begin weer met speler X
function resetGame() {
  for(let i = 0; i < bord.length; i++) {
    bord[i] = '';
    cells[i].textContent = '';
  }
  currentPlayer = 'X';
  gameActive = true;
  message.textContent = `Speler ${currentPlayer} is aan de beurt`;
}



// EventListeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetknop.addEventListener('click', resetGame);



// Overig
message.textContent = `Speler ${currentPlayer} is aan de beurt`;
