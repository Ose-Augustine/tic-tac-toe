
let allPanels = document.querySelectorAll('.control-panel')

//returns bool 
function allEqual(arr){
    let blanks = ''; 
    //returns how many times blanks appear in arr
    let count = arr.filter(x => x === blanks).length;
    if (count > 1){
        return false; 
    }else{
        //check if all elements in array are the same
        return arr.every(val => val === arr[0]);
    }
}
let controlPanel = document.querySelector('.controller'); 
//Umpire controls the game board, its population and player's turn
//Umpire checks for win and controls the display wizard
class Umpire{
    constructor(){
        this.counter = 1; // controls the player's turn
        this.board = ['','','','','','','','',''];//Remains the same for every instance of the umpire 
    }
    //Alternate marker 
    //X for odd counter
    //O for even counter 
    whosTurn(){
        if (this.counter % 2 != 0) {
            this.counter++;
            return 'X';
        }else{
            this.counter++; 
            return 'O'; 
        }
}
    populateBoard(position){
        let board = this.board;
        let intPosition = parseInt(position);
        //Position is the textcontent of the node and serves as the board index 
        //Position is parsed to int 
        let mark = this.whosTurn();//whosTurn is called to alternate marker.
        board[intPosition] = mark;  
        return mark; 
    }    
    displayWizard(mark,position){
        //Position is the textContent of the clicke node 
        //on the control panel
        let displayText = mark; 
        let node = document.querySelector(`.c${position}`);
        node.textContent = displayText ; //mark is either'X' or 'O' and is collected as the return of populate board
    }
  
    checkForWin(){
        let board = this.board; 
        //horizontal positions
        let firstRow = [board[0],board[1],board[2]];
        let secondRow = [board[3],board[4],board[5]];
        let thirdRow = [board[6],board[7],board[8]];
        //vertical positions
        let firstColumn = [board[0],board[3],board[6]]; 
        let SecondColumn = [board[1],board[4],board[6]];
        let thirdColumn = [board[2],board[5],board[8]]; 
        //diagonal positions 
        let left = [board[0],board[4],board[8]]; 
        let right = [board[2],board[4],board[6]]; 
    }
        
    gameRunner(){
        clicks = 3; 
        allPanels.forEach((panel) => {
            panel.addEventListener('click', (e) => {
                clicks--; 
                let positionToSend = e.target.textContent;
                let receivedMark = this.populateBoard(positionToSend);
                this.displayWizard(receivedMark,positionToSend);
                if (clicks <= 0){
                    this.checkForWin();
                }
                
            })
        })
    }
}


//Controller would handle starting the game sequence, create the umpire and pass in the players name and id to the umpire collected from the registry