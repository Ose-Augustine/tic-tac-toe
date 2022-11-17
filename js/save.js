const saveButton = document.querySelector('#save');
const saveBlock = document.querySelector('#save-block'); 
const continueBlock = document.querySelector('#continue-block');

saveButton.addEventListener('click', ()=>{
    saveBlock.style.visibility = 'visible';  
})

function storesBoard(board){ 
    let saveId = document.querySelector('#saveId').value; 
    let stringedBoard = JSON.stringify(board); 
    localStorage.setItem(saveId,stringedBoard);
    saveBlock.style.visibility = 'hidden';
}

class saveAndContinue{
    retrievesBoard(gameId){
        let parsedBoard = JSON.parse(localStorage.getItem(gameId));
        return parsedBoard;
    }
    boardMapper(parsedBoard){
        let positionsOfX = [];
        let positionsOfO = []; 
        let elementO = 'O'; 
        let element = 'X'; 
        let idx = parsedBoard.indexOf(element); 
        let idxO = parsedBoard.indexOf(elementO); 
        //get the positions of x 
        while (idx !== -1) {
            positionsOfX.push(idx); 
            idx = parsedBoard.indexOf(element, idx + 1); 
        }
        //get the positions of o 
        while (idx !== -1){
            positionsOfO.push(idxO); 
            idx = parsedBoard.indexOf(elementO, idxO + 1);
        }
        return [positionsOfX,positionsOfO]; 
    }
    //X and O are arrays containing the positions of 
    //X and O elements 
    usePositions(O,X){
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
    continueSequence(){
        continueBlock.style.visibility = 'visible'; 
        let id = continueBlock.value; 
        let retrievedBoard = this.retrievesBoard(id); 
        let boardmap = this.boardMapper(retrievedBoard);
        this.usePositions(boardmap[0],boardmap[1]);
    }
}
