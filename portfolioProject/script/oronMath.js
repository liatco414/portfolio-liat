const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sum = document.getElementById('sum');
const check = document.getElementById('check');
const next = document.getElementById('next');
const checkAnswer = document.getElementById('checkAnswer');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const double = document.getElementById('double');
let op = document.getElementById('op');
const equal = document.getElementById('equal');
const multiTable = document.querySelector('.multiTable');
const rights = document.querySelector('.rights');
const wrongs = document.querySelector('.wrongs');
const easy = document.getElementById('easy')
const medium = document.getElementById('medium')
const hard = document.getElementById('hard')
const start = document.getElementById('start')
const popup = document.querySelector('.popup')

let currentLevel = 'easy'
function updateQuestion() {
    if (currentLevel === 'easy') {
        x = (Math.floor(Math.random() * 20) + 1);
        y = (Math.floor(Math.random() * 20) + 1);

    } else if (currentLevel === 'medium') {
        x = (Math.floor(Math.random() * 50) + 1);
        y = (Math.floor(Math.random() * 50) + 1);


    } else if (currentLevel === 'hard') {
        x = (Math.floor(Math.random() * 100) + 1);
        y = (Math.floor(Math.random() * 100) + 1);
    }
    num1.innerHTML = x;
    num2.innerHTML = y;
    checkAnswer.style.backgroundColor = '';
    checkAnswer.innerHTML = '';
    sum.value = '';

    sum.value = '';
    checkAnswer.style.backgroundColor = '';
    checkAnswer.innerHTML = '';
}

function levels() {
    easy.addEventListener('click', one)
    function one() {
        currentLevel = 'easy'
        updateQuestion();
    }
    medium.addEventListener('click', two)
    function two() {
        currentLevel = 'medium';
        updateQuestion();
    }
    hard.addEventListener('click', three)
    function three() {
        currentLevel = 'hard';
        updateQuestion();
    }
}
levels()



plus.addEventListener('click', function operatorPlus() {
    let currentOp = '+';
    op.innerHTML = currentOp;
    levels();


    let rightAns = 0;
    let wrongAns = 0;

    rights.style.color = 'green';
    wrongs.style.color = 'red';
    rights.innerHTML = `תשובות נכונות: ${rightAns}`
    wrongs.innerHTML = `תשובות לא נכונות: ${wrongAns}`


    x = (Math.floor(Math.random() * 10) + 1);
    y = (Math.floor(Math.random() * 10) + 1);

    num1.innerHTML = x;
    num2.innerHTML = y;

    check.addEventListener('click', answer);

    function answer() {

        if (sum.value == (x + y)) {
            checkAnswer.innerHTML = 'תשובה נכונה, כל הכבוד!';
            checkAnswer.style.direction = 'rtl';
            checkAnswer.style.paddingTop = '20px';
            checkAnswer.style.color = 'green';
            checkAnswer.style.backgroundColor = 'rgb(213, 255, 213)';
            rightAns++;
        } else {
            checkAnswer.innerHTML = 'תשובה לא נכונה, נסה שנית!'
            checkAnswer.style.direction = 'rtl';
            checkAnswer.style.paddingTop = '20px';
            checkAnswer.style.color = 'red';
            checkAnswer.style.backgroundColor = 'rgb(252, 227, 227)';
            wrongAns++;
        }

        rights.innerHTML = `תשובות נכונות: ${rightAns}`
        wrongs.innerHTML = `תשובות לא נכונות: ${wrongAns}`

    }
    next.addEventListener('click', nextQuestion);
    function nextQuestion() {
        updateQuestion();

    }
    sum.value = '';
    checkAnswer.style.backgroundColor = '';
    checkAnswer.innerHTML = '';

});


minus.addEventListener('click', function operatorMinus() {
    levels();
    let rightAns = 0;
    let wrongAns = 0;
    rights.style.color = 'green';
    wrongs.style.color = 'red';
    rights.innerHTML = `תשובות נכונות: ${rightAns}`
    wrongs.innerHTML = `תשובות לא נכונות: ${wrongAns}`

    let currentOp = '-';
    op.innerHTML = currentOp;

    y = Math.floor(Math.random() * 20) + 1;
    x = Math.floor(Math.random() * 20) + 1;

    num1.innerHTML = x;
    num2.innerHTML = y;

    check.removeEventListener('click', answer);
    check.addEventListener('click', answer);

    function answer() {

        if (sum.value == (x - y)) {
            checkAnswer.innerHTML = 'תשובה נכונה, כל הכבוד!';
            checkAnswer.style.direction = 'rtl';
            checkAnswer.style.paddingTop = '20px';
            checkAnswer.style.color = 'green';
            checkAnswer.style.backgroundColor = 'rgb(213, 255, 213)';
            rightAns++;
        } else {
            checkAnswer.innerHTML = 'תשובה לא נכונה, נסה שנית!'
            checkAnswer.style.direction = 'rtl';
            checkAnswer.style.paddingTop = '20px';
            checkAnswer.style.color = 'red';
            checkAnswer.style.backgroundColor = 'rgb(252, 227, 227)';
            wrongAns++;
        }
        rights.innerHTML = `תשובות נכונות: ${rightAns}`
        wrongs.innerHTML = `תשובות לא נכונות: ${wrongAns}`
    }

    next.addEventListener('click', nextQuestion);

    function nextQuestion() {
        updateQuestion();
    }
    sum.value = '';
    checkAnswer.style.backgroundColor = '';
    checkAnswer.innerHTML = '';
});


divide.addEventListener('click', function operatorDivide() {
    let rightAns = 0;
    let wrongAns = 0;
    rights.style.color = 'green';
    wrongs.style.color = 'red';
    rights.innerHTML = `תשובות נכונות: ${rightAns}`
    wrongs.innerHTML = `תשובות לא נכונות: ${wrongAns}`

    let currentOp = ':';
    op.innerHTML = currentOp;

    y = Math.floor(Math.random() * 10) + 1;
    x = Math.floor(Math.random() * 10) + 1;

    num1.innerHTML = x;
    num2.innerHTML = y;

    check.removeEventListener('click', answer);
    check.addEventListener('click', answer);

    function answer() {
        let result = parseFloat((x / y).toFixed(2));
        let userAnswer = parseFloat(sum.value);

        console.log(result, userAnswer);

        if (sum.value == (x / y)) {
            checkAnswer.innerHTML = 'תשובה נכונה, כל הכבוד!';
            checkAnswer.style.direction = 'rtl';
            checkAnswer.style.paddingTop = '20px';
            checkAnswer.style.color = 'green';
            checkAnswer.style.backgroundColor = 'rgb(213, 255, 213)';
            rightAns++;
        } else {
            checkAnswer.innerHTML = 'תשובה לא נכונה, נסה שנית!'
            checkAnswer.style.direction = 'rtl';
            checkAnswer.style.paddingTop = '20px';
            checkAnswer.style.color = 'red';
            checkAnswer.style.backgroundColor = 'rgb(252, 227, 227)';
            wrongAns++;
        }

        rights.innerHTML = `תשובות נכונות: ${rightAns}`
        wrongs.innerHTML = `תשובות לא נכונות: ${wrongAns}`
    }

    next.addEventListener('click', nextQuestion);

    function nextQuestion() {
        updateQuestion();
    }
    sum.value = '';
    checkAnswer.style.backgroundColor = '';
    checkAnswer.innerHTML = '';

});


double.addEventListener('click', function operatorDouble() {
    let rightAns = 0;
    let wrongAns = 0;
    rights.style.color = 'green';
    wrongs.style.color = 'red';
    rights.innerHTML = `תשובות נכונות: ${rightAns}`
    wrongs.innerHTML = `תשובות לא נכונות: ${wrongAns}`
    let currentOp = '*';
    op.innerHTML = currentOp;

    y = Math.floor(Math.random() * 10) + 1;
    x = Math.floor(Math.random() * 10) + 1;

    num1.innerHTML = x;
    num2.innerHTML = y;

    check.removeEventListener('click', answer);
    check.addEventListener('click', answer);

    function answer() {

        if (sum.value == (x * y)) {
            checkAnswer.innerHTML = 'תשובה נכונה, כל הכבוד!';
            checkAnswer.style.direction = 'rtl';
            checkAnswer.style.paddingTop = '20px';
            checkAnswer.style.color = 'green';
            checkAnswer.style.backgroundColor = 'rgb(213, 255, 213)';
            rightAns++;
        } else {
            checkAnswer.innerHTML = 'תשובה לא נכונה, נסה שנית!'
            checkAnswer.style.direction = 'rtl';
            checkAnswer.style.paddingTop = '20px';
            checkAnswer.style.color = 'red';
            checkAnswer.style.backgroundColor = 'rgb(252, 227, 227)';
            wrongAns++;
        }

        rights.innerHTML = `תשובות נכונות: ${rightAns}`
        wrongs.innerHTML = `תשובות לא נכונות: ${wrongAns}`
    }

    next.addEventListener('click', nextQuestion);

    function nextQuestion() {
        updateQuestion();
    }
    sum.value = '';
    checkAnswer.style.backgroundColor = '';
    checkAnswer.innerHTML = '';
});

let tableContent = '<table border="2">';
for (let y = 1; y <= 10; y++) {
    tableContent += '<tr>';
    for (let x = 1; x <= 10; x++) {
        let num = x * y;
        tableContent += `<td>${num}</td>`;
    }
    tableContent += '</tr>';
}
tableContent += '</table>';

multiTable.innerHTML = tableContent;

const table = multiTable.querySelector('table');
const cells = multiTable.querySelectorAll('table tr td')
table.style.borderCollapse = 'collapse';


function updateTableStyle() {
    if (window.innerWidth <= 1200) {
        table.style.width = '50vw';
        table.style.height = '34vh';
        table.style.borderCollapse = 'collapse';

    } else {
        table.style.width = '20vw';
        table.style.height = '34vh';
        table.style.borderCollapse = 'collapse';

    }
}

updateTableStyle();

window.addEventListener('resize', updateTableStyle);

start.addEventListener('click', () => {
    popup.style.display = 'none';
})

setTimeout(() => {
    popup.style.display = 'block';
    popup.style.display = 'flex';
}, 800);