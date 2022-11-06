const Player = (name) => {
    let points = 0;
    const sayName = () => console.log(` Hello ${name}`);
    return {sayName}
}
let mapper = []; 
let clicks = 9;
const boxes = document.querySelectorAll('div');

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if (clicks % 2 == 0) {
            box.textContent = 'O'; 
        }else {
            box.textContent = 'X';
        }
        console.log([e.target.innerText, e.target.className])
        clicks -= 1;
    })
})

function winningAlgorithm () {
    let first = ['box1','box4','box7'];
    let second = ['box4', 'box5','box6']; 
    let third = ['box1','box2','box3'];
    let fourth = ['box2','box5','box8'];
    let fifth = ['box3','box6','box9'];
    let sixth = ['box7','box8','box9'];
    let eight = ['box3','box5','box7'];
    let ninth = ['box1','box5','box9']; 
}


