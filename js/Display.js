
let allPanels = document.querySelectorAll('.control-panel')

//Umpire controls the game board, its population and player's turn
//Umpire checks for win and controls the display wizard
let counter = 1 
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
        let text = '';
        switch(true){
            //horizontal win 
            case board[0]==board[1] && board[1]==board[2]:
                alert('this is switch one')
                break;
            case board[3]==board[4] && board[4]==board[5]:
                alert ('this is switch two')
                break; 
            case board[6]==board[7] && board[7]==board[8]:
                status = true; 
                break;
            //Vertical win 
            case board[0]==board[3] && board[3]==board[6]:
                status = true; 
                break; 
            case board[1]==board[4] && board[4]==board[7]:
                status = true; 
                break;
            case board[2]==board[5] && board[5]==board[8]:
                status = true; 
                break;
            //diagonal win
            case board[0]==board[4] && board[4]==board[8]:
                status = true; 
                break;
            case board[2]==board[4] && board[4]==board[6]:
                status = true; 
                break;
            default:
                alert(`No winner found`);
        }
        console.log(status)
    }
    gameRunner(){
        clicks = 3; 
        allPanels.forEach((panel) => {
            panel.addEventListener('click', (e) => {
                clicks--; 
                let positionToSend = e.target.textContent;
                let receivedMark = this.populateBoard(positionToSend);
                this.displayWizard(receivedMark,positionToSend);
                //Start the checker only if there is  a minimum of
                //three clicks on the board
                if (clicks <= 0){
                    this.checkForWin(); 
                }
                
            })
         })
    }
}


//Controller would handle starting the game sequence, create the umpire and pass in the players name and id to the umpire collected from the registry