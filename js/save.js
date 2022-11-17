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

function storesBoard(board){ 
    let stringedBoard = JSON.stringify(board); 
    localStorage.setItem('stringify',board);
    return stringedBoard; 
}
function retrievesBoard(board){
    parsedBoard = JSON.parse(localStorage.getItem('stringify'));
    return parsedBoard;
}
