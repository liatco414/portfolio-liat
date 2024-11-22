const userColor = document.querySelector('#userColor');
const bgcBtn = document.querySelector('#bgcBtn');
const paper = document.querySelector('.paper');
const userWidth = document.querySelector('#userWidth');
const userHeight = document.querySelector('#userHeight');
const userContent = document.querySelector('#userContent');
const userTextColor = document.querySelector('#userTextColor');
const userFz = document.querySelector('#userFz');
const fontSelect = document.querySelector('.fontSelect');
const userFont = document.querySelector('#userFont');
const form = document.querySelector('.bgcForm form');
const papers = document.querySelector('.papers')
const saveBtn = document.querySelector('#saveBtn')

let newPage = false;
let currentPage = document.querySelector('.paper');

let bgcDiv;
bgcBtn.addEventListener('click', navBar)
function navBar() {
    bgcDiv = document.createElement('div');
    const p = document.createElement('p');
    p.className = 'para';

    bgcDiv.className = 'bgcDiv';
    bgcDiv.style.width = userWidth.value + 'px';
    bgcDiv.style.height = userHeight.value + 'px';
    bgcDiv.style.border = 'none';
    bgcDiv.style.backgroundColor = userColor.value;
    bgcDiv.style.width = userWidth.value + 'px';
    bgcDiv.style.height = userHeight.value + 'px';
    bgcDiv.style.backgroundColor = userColor.value;
    bgcDiv.style.color = userTextColor.value;
    bgcDiv.style.fontSize = userFz.value + 'px';
    bgcDiv.style.fontFamily = fontSelect.value;
    bgcDiv.style.direction = 'rtl';
    bgcDiv.style.padding = '15px';
    p.innerHTML = userContent.value;
    bgcDiv.appendChild(p);
    paper.appendChild(bgcDiv)


    if (fontSelect.value === 'none' && userFont.value) {
        bgcDiv.style.fontFamily = userFont.value;
    }


    currentPage.appendChild(bgcDiv);
    const paperRect = currentPage.getBoundingClientRect();
    const bgcDivRect = bgcDiv.getBoundingClientRect();

    if (bgcDivRect.bottom > paperRect.bottom * 0.90) {
        const newPaper = document.createElement('div');
        newPaper.className = 'paper';
        papers.appendChild(newPaper);
        currentPage = newPaper;
    }

    setTimeout(() => {
        bgcDiv.classList.add('active');
    }, 10);

    form.reset();

};

fontSelect.addEventListener('change', () => {
    if (fontSelect.value === 'none') {
        userFont.style.display = 'block';
    } else {
        userFont.style.display = 'none';
    }

    return
});

saveBtn.addEventListener('click', screenShot);

function screenShot() {
    const e = document.querySelector('.papers');

    html2canvas(e).then(img => {
        const link = document.createElement('a');
        link.href = img.toDataURL('image/png');
        link.download = 'screenshot.png';
        link.click();
        alert('המסך נשמר בהצלחה!');

    });
}








