let randomFraction = Math.random();
printMessage('Wylosowany ulamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;
printMessage('Ułamek pomnożony przez 3 i powiekszony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);
printMessage('Liczba po zaokragleniu d dol to: ' + roundNumber);


let computerMove = 'kamień';
let playerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

// document.write('<h2>Hello World!</h2>');
// document.write('<p>This is my first JS script.</p>');
// document.write('<p>It is <strong>amazing!!!</strong></p>');
// document.write('<iframe src="https://www.youtube-nocookie.com/embed/IoULsBN9xH4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
