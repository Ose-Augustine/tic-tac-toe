const saveButton = document.querySelector('#save');
const saveBlock = document.querySelector('#save-block'); 
const continueBlock = document.querySelector('#continue-block');
const continueBtn = document.querySelector('#continue-btn');

saveButton.addEventListener('click', ()=>{
    saveBlock.style.visibility = 'visible';  
})
continueBtn.addEventListener('click', ()=>{
    continueBlock.style.visibility = 'visible';
})


function storesBoard(board){ 
    let saveId = document.querySelector('#saveId').value; 
    let stringedBoard = JSON.stringify(board); 
    localStorage.setItem(saveId,stringedBoard);
    saveBlock.style.visibility = 'hidden';
}

function cleanOut(){

}

class saveAndContinue{
    retrievesBoard(gameId){
        let parsedBoard = JSON.parse(localStorage.getItem(gameId));
        return parsedBoard;
    }
    boardMapper(parsedBoard){
        let positionsOfX = [];
        let positionsOfO = []; 
        for (let i=0; i<parsedBoard.length; i++){
            if (parsedBoard[i]==='X'){
                positionsOfX.push(i); 
            }
            if (parsedBoard[i]==='O'){
                positionsOfO.push(i); 
            }
        }
        return [positionsOfX,positionsOfO]; 
    }
    //X and O are arrays containing the positions of 
    //X and O elements 
    usePositions(X,O){
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
            let content = parseInt(panel.textContent); 
            console.log(content)
            if (O.includes(content) || X.includes(content)){
                panel.style.visibility = 'hidden';
            }
        })
    }
    continueSequence(){
        continueBlock.style.visibility = 'visible'; 
        const continueId = document.querySelector('#continueId').value;
        let retrievedBoard = this.retrievesBoard(continueId); 
        console.log(retrievedBoard)
        let boardmap = this.boardMapper(retrievedBoard);
        this.usePositions(boardmap[0],boardmap[1]);
    }
}
