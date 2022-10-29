const Player = (name) => {
    let points = 0;
    const sayName = () => console.log(` Hello ${name}`);
    return {sayName}
}

let clicks = 6;
const boxes = document.querySelectorAll('div');

function textAlternator (box) {
    if (clicks % 2 == 0) {
        box.textContent = 'X'; 
    }else {
        box.textContent = 'O';
    }
}


