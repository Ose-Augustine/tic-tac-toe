const Player= (name, marker)=>{
    const sayName = () => name;
    const sayMarker = () => marker;
    return { sayMarker, sayName };
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



