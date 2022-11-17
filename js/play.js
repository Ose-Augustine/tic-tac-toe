
const continueSend = document.querySelector('#continue-send');
const sendButton = document.querySelector('#save-send');

let umpire = new Umpire(); 
sendButton.addEventListener('click',()=>{
    storesBoard(umpire.board); 
}); 
continueSend.addEventListener('click',()=>{
    let count = umpire.counter 
    let continueAgent = new saveAndContinue(); 
    let retrievedGame = continueAgent.continueSequence();//get the current board 
    umpire.board = retrievedGame;//set the umpire's board to the current board
    count += 1; //start from the next counter
}
)
umpire.gameRunner(); 
