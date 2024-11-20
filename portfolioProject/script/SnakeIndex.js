const snake = document.querySelector('.snake');
const fruit = document.querySelector('.fruit');
const boardGame = document.querySelector('.boardGame');
const snakeBody = document.querySelector('.snakeBody')
const popup = document.querySelector('.popup');
let gameScore = document.querySelector('.score');
let highestScore = document.querySelector('.highestScore');
const newGame = document.querySelector('.newGame');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const left = document.querySelector('.left');
const right = document.querySelector('.right')
const arrow = document.querySelector('.arrow')

let snakePositionX = 0;
let snakePositionY = 0;
let fruitRandomY = 0;
let fruitRandomX = 0;
let direction = '';
let snakeSize = 1;
let bodyParts = [{ x: snakePositionX, y: snakePositionY }];
let score = 0;
let theScore = 0;

let isUsingScreenArrows = false;
let keyboardSpeed = 10;
let screenArrowSpeed = 20;
let currentSpeed = keyboardSpeed // default


function randomFruit() {

    const containerWidth = boardGame.offsetWidth;
    const containerHeight = boardGame.offsetHeight;

    fruitRandomX = Math.floor(Math.random() * (containerWidth - fruit.offsetWidth - arrow.offsetWidth));
    fruitRandomY = Math.floor(Math.random() * (containerHeight - fruit.offsetHeight - arrow.offsetHeight));

    fruit.style.top = fruitRandomY + 'px';
    fruit.style.left = fruitRandomX + 'px';
    return
}
randomFruit();

function randomPositionSnake() {
    const boardWidthX = boardGame.offsetWidth;
    const boardHeightY = boardGame.offsetHeight;

    snakePositionX = Math.floor(Math.random() * (boardWidthX - snake.offsetWidth - arrow.offsetWidth));
    snakePositionY = Math.floor(Math.random() * (boardHeightY - snake.offsetHeight - arrow.offsetHeight));

    snake.style.top = snakePositionY + 'px';
    snake.style.left = snakePositionX + 'px';

}
randomPositionSnake();

document.addEventListener('keydown', snakeMovement)
function snakeMovement(event) {
    event.preventDefault();

    switch (event.key) {
        case 'ArrowUp':
            direction = 'up';
            break;
        case 'ArrowDown':
            direction = 'down';
            break;
        case 'ArrowLeft':
            direction = 'left';
            break;
        case 'ArrowRight':
            direction = 'right';
            break;
    }
    isUsingScreenArrows = false;
    restartGameWithNewSpeed();

};

function updateSnakeBody() {
    const currentBodyParts = document.querySelectorAll('.snakeBody');
    currentBodyParts.forEach(part => part.remove());

    for (let i = 0; i < bodyParts.length; i++) {
        if (i === 0) {
            snake.style.top = bodyParts[i].y + 'px';
            snake.style.left = bodyParts[i].x + 'px';
        } else {
            const bodyPart = document.createElement('div');
            bodyPart.classList.add('snakeBody');
            bodyPart.style.top = bodyParts[i].y + 'px';
            bodyPart.style.left = bodyParts[i].x + 'px';
            boardGame.appendChild(bodyPart);
        }
    }
}
let getGame;
function startGame() {
    if (getGame) clearInterval(getGame);

    if (isUsingScreenArrows) {
        currentSpeed = screenArrowSpeed;
    } else {
        currentSpeed = keyboardSpeed;
    };

    getGame = setInterval(() => {

        let newHead = { x: snakePositionX, y: snakePositionY };

        switch (direction) {
            case 'up':
                snakePositionY -= 2;
                break;
            case 'down':
                snakePositionY += 2;
                break;
            case 'left':
                snakePositionX -= 2;
                break;
            case 'right':
                snakePositionX += 2;
                break;
        }

        bodyParts.unshift(newHead);

        //חישוב מרחק הנחש מהפרי עד שהנחש "אוכל" אותו כי מיקום מדוייק של שתיהם ייצור קושי בתפיסת הפרי
        if (Math.abs(snakePositionX - fruitRandomX) < 8 && Math.abs(snakePositionY - fruitRandomY) < 8) {
            randomFruit();
            score++;
            gameScore.innerHTML = `Your Score: ${score}`;
            if (score > theScore) {
                theScore = score;
            }
            highestScore.innerHTML = `Highest Score: ${theScore} `;

            for (let i = 0; i < 3; i++) {
                bodyParts.push({ x: bodyParts[bodyParts.length - 1].x, y: bodyParts[bodyParts.length - 1].y });
            }


        } else {
            bodyParts.pop();
        }

        updateSnakeBody();

        if (snakePositionX < 0 ||
            snakePositionX >= boardGame.offsetWidth ||
            snakePositionY < 0 ||
            snakePositionY >= boardGame.offsetHeight) {
            popup.style.display = 'flex';
            clearInterval(getGame);
        }

    }, currentSpeed);
}
startGame();


newGame.addEventListener('click', () => {
    score = 0;
    gameScore.innerHTML = `Your Score: ${score}`;
    bodyParts = [{ x: snakePositionX, y: snakePositionY }];
    direction = '';
    popup.style.display = 'none';
    randomPositionSnake();
    randomFruit();
    updateSnakeBody();
    startGame();
})

/* ---------------------------- phone Arrow------------------------ */
up.addEventListener('click', () => {
    direction = 'up';
    isUsingScreenArrows = true;
    restartGameWithNewSpeed();
})
down.addEventListener('click', () => {
    direction = 'down';
    isUsingScreenArrows = true;
    restartGameWithNewSpeed();
})
left.addEventListener('click', () => {
    direction = 'left';
    isUsingScreenArrows = true;
    restartGameWithNewSpeed();
})
right.addEventListener('click', () => {
    direction = 'right';
    isUsingScreenArrows = true;
    restartGameWithNewSpeed();
})

function restartGameWithNewSpeed() {
    clearInterval(getGame);
    startGame();
}

