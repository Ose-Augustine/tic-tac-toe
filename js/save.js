const saveButton = document.querySelector('#save');
const saveBlock = document.querySelector('#save-block');
const sendButton = document.querySelector('#send'); 

saveButton.addEventListener('click', ()=>{
    saveBlock.style.visibility = 'visible';  
})
sendButton.addEventListener('click', ()=>{
    const saveId = document.querySelector('#saveId').value; 
    localStorage.setItem('info',saveId);
    saveBlock.style.visibility = 'hidden' ;
})

function storesBoard(gameId,board){ 
    let stringedBoard = JSON.stringify(board); 
    localStorage.setItem(gameId,board);
    return stringedBoard; 
}
function retrievesBoard(gameId,board){
    parsedBoard = JSON.parse(localStorage.getItem(gameId));
    return parsedBoard;
}
function boardMapper(board){
    let positionsOfX = [];
    let positionsOfO = []; 
    let elementO = 'O'; 
    let element = 'X'; 
    let idx = board.indexOf(element); 
    //get the positions of x 
    while (idx !== -1) {
        positionsOfX.push(idx); 
        idx = board.indexOf(element, idx + 1); 
    }
    //get the positions of o 
    while (idx !== -1){
        positionsOfO.push(idx); 
        idx = board.indexOf(element, idx + 1);
    }
}
//X and O are arrays containing the positions of 
//X and O elements 
function usePositions(O,X){
    let panelContent = [];
    //use element to access the corresponding dom
    //set the text content of that dom to be o
    O.forEach(element => {
        const node = document.querySelector(`.c${element}`);
        node.textContent = 'O'; 
    });
    //use element to access the corresponding dom
    //set the text content of that dom to be x
    X.forEach(element => {
        const node = document.querySelector(`.c${element}`);
        node.textContent = 'X'; 
    })
    //Remove the panels that their text content match those 
    //in X or O arrays 
    const allPanels = document.querySelectorAll('.control-panel'); 
    allPanels.forEach((panel) => {
        let content = parseInt(panel.value); 
        if (O.includes(content) || X.includes(content)){
            panel.style.visibility = 'hidden';
        }
    })
 
    
}