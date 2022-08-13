let button = document.querySelector('button');

button.addEventListener('click', setBackground);

function setBackground() {
    
    let body = document.getElementsByTagName('body')[0];
    let paragraph = body.getElementsByTagName('p');

    let p1 = paragraph[0];
    p1.style.background = 'red';

    let p2 = paragraph[1];
    p2.style.background = 'yellow';

}