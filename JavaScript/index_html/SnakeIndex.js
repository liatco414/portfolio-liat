const snake = document.querySelector('.snake');
const fruit = document.querySelector('.fruit');
const boardGame = document.querySelector('.boardGame');
const snakeBody = document.querySelector('.snakeBody')
const popup = document.querySelector('.popup');

let snakePositionX = 200;
let snakePositionY = 200;
let fruitRandomY = 0;
let fruitRandomX = 0;
let direction = '';
let snakeSize = 1;
let bodyParts = [{ x: snakePositionX, y: snakePositionY }];


function randomFruit() {

    const containerWidth = boardGame.offsetWidth;
    const containerHeight = boardGame.offsetHeight;

    fruitRandomX = Math.floor(Math.random() * (containerWidth - fruit.offsetWidth));
    fruitRandomY = Math.floor(Math.random() * (containerHeight - fruit.offsetHeight));

    fruit.style.top = fruitRandomY + 'px';
    fruit.style.left = fruitRandomX + 'px';
    return
}
randomFruit();

document.addEventListener('keydown', (event) => {
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
    return
});
function updateSnakeBody() {
    const currentBodyParts = document.querySelectorAll('.snakeBody');
    currentBodyParts.forEach(part => part.remove());

    for (let i = 0; i < bodyParts.length; i++) {
        const part = bodyParts[i];
        if (i === 0) {
            snake.style.top = part.y + 'px';
            snake.style.left = part.x + 'px';
        } else {
            const bodyPart = document.createElement('div');
            bodyPart.classList.add('snakeBody');
            bodyPart.style.top = part.y + 'px';
            bodyPart.style.left = part.x + 'px';
            boardGame.appendChild(bodyPart);
        }
    }
}

const getGame = setInterval(() => {
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

    snake.style.top = snakePositionY + 'px';
    snake.style.left = snakePositionX + 'px';

    bodyParts.unshift(newHead);

    //חישוב מרחק הנחש מהפרי עד שהנחש "אוכל" אותו כי מיקום מדוייק של שתיהם ייצור קושי בתפיסת הפרי
    if (Math.abs(snakePositionX - fruitRandomX) < 8 && Math.abs(snakePositionY - fruitRandomY) < 8) {
        randomFruit();
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

}, 10);
