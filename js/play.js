
const continueBtn = document.querySelector('#continue-btn');
const sendButton = document.querySelector('#save-send');

let umpire = new Umpire(); 
sendButton.addEventListener('click',()=>{
    storesBoard(umpire.board); 
}); 
continueBtn.addEventListener('click',()=>{
    let continueAgent = new saveAndContinue(); 
    continueAgent.continueSequence(); }
)
umpire.gameRunner(); 

// (function Controller(){
//     let umpire  = new Umpire();
//     umpire.gameRunner();
//     //display the input field
//     sendButton.addEventListener('click', storesBoard(umpire.board)); 
  
//     });
// })();
