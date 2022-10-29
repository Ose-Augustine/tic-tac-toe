const Player = (name) => {
    let points = 0;
    const sayName = () => console.log(` Hello ${name}`);
    return {sayName}
}

let clicks = 9;
const boxes = document.querySelectorAll('div');

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (clicks % 2 == 0) {
            box.textContent = 'O'; 
        }else {
            box.textContent = 'X';
        }
        clicks -= 1;
    })
})


