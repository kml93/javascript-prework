let randomFraction = Math.random();

let randomNumber = Math.floor(randomFraction * 9 + 11); // trening generowanie 
printMessage('Liczba wygenerowana to :' + randomNumber); // liczby od 11 do 19

printMessage('Wylosowany ulamek to: ' + randomFraction);

let calculation = (randomFraction * 3 + 1);
printMessage('Ułamek pomnożony przez 3 i powiekszony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);
printMessage('Liczba po zaokragleniu w dol to: ' + roundNumber);

let computerMove = 'nieznany ruch';

if (roundNumber == 1) {
    computerMove = 'kamień';
} else if (roundNumber == 2) {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch'

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else {
    playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove);


printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + ', to wygrywasz!');

// if (1 > 2) {
//     printMessage('Niesamote Jeden jest wiekszy od dwa!!');
// } else if (1 == 2) {
//     printMessage('Dziwne - jeden jest rowne dwa?!');
// } else {
//     printMessage('Wszystko po staremu jeden jest mniejszy od dwa.');
// }

// document.write('<h2>Hello World!</h2>');
// document.write('<p>This is my first JS script.</p>');
// document.write('<p>It is <strong>amazing!!!</strong></p>');
// document.write('<iframe src="https://www.youtube-nocookie.com/embed/IoULsBN9xH4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
