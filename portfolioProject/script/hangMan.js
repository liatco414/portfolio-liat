const word = document.querySelector('.word');
const keyboardButtons = document.querySelectorAll('.keyboard button'); // לקרוא לכל כפתור במקלדת
const hangMan = document.querySelectorAll('.hangMan img');
const popup = document.querySelector('.popup');
const next = document.querySelector('.next');
const newGame = document.querySelector('.newGame');
const score = document.querySelector('.score');
const start = document.querySelector('.start');
const correct = document.querySelector('.correct');
const wellDone = document.querySelector('.wellDone')

let correctWord = 0;
let incorrect = 0;

// פונקציה שמעדכנת טעויות
function updateIncorrect() {
    incorrect++;
    score.innerHTML = "mistakes: " + incorrect + "/8";

    if (incorrect <= hangMan.length) {
        hangMan[incorrect - 1].style.display = 'block';
    }

    if (incorrect === hangMan.length) {
        popup.style.display = 'flex';
    }
}

function series() {
    const shows = ['ARROW', 'FRIENDS', 'THE FLASH', 'SHAMELESS', 'THE BLACKLIST', 'SEINFELD', 'SCANDAL', 'IRONMAN', 'THOR', 'TRUTH OR DARE', 'THE WALKING DEAD', 'PRISON BREAK', 'ONCE UPON A TIME', 'SPIDERMAN', 'HOW I MET YOUR MOTHER', 'BREAKING BAD', 'GAME OF THRONES'];
    const tvSeries = shows[Math.floor(Math.random() * shows.length)];

    const splitShows = tvSeries.split('');
    console.log(splitShows);

    const divLi = document.createElement('div');
    divLi.className = 'divLi';
    word.appendChild(divLi);

    splitShows.forEach(space => {
        const letterElement = document.createElement('li');
        letterElement.className = 'letters'; // נמצא העיצוב שלו ב-CSS

        if (space === ' ') {
            letterElement.style.borderBottom = 'none';
            letterElement.textContent = ' ';
        }
        divLi.appendChild(letterElement);
    });


    keyboardButtons.forEach(button => {
        button.onclick = () => {
            const letter = button.innerHTML;
            checkLetter(letter, splitShows);
        };
    });
}

function checkLetter(letter, splitShows) {
    const lettersElements = document.querySelectorAll('.word .letters');
    let isCorrect = false;

    for (let i = 0; i < splitShows.length; i++) {
        if (splitShows[i] === letter && lettersElements[i].textContent === '') {
            lettersElements[i].textContent = letter;
            isCorrect = true;
        }
    }

    const checkWord = Array.from(lettersElements).every(letter => letter.textContent !== '');
    if (checkWord) {
        correctWord++;
        correct.textContent = 'Correct Words: ' + correctWord;
        wellDone.textContent = 'You Have Completed The Word, Well Done!'

    }


    if (!isCorrect) {
        updateIncorrect();
    }
}

// פונקציית איפוס
function resetGame() {
    word.innerHTML = '';
    hangMan.forEach(img => (img.style.display = 'none'));
    popup.style.display = 'none';
    incorrect = 0;
    score.innerHTML = "mistakes: " + incorrect + "/8";
    wellDone.textContent = '';
}

start.addEventListener('click', () => {
    resetGame();
    series();
    correctWord = 0;
});

next.addEventListener('click', () => {
    resetGame();
    series();
});

newGame.addEventListener('click', () => {
    resetGame();
    series();
    correctWord = 0;
});
