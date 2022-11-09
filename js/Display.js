
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
            this.counter = this.counter + 1;
            alert("Player one, make a move");
            console.log (this.counter); 
            return 'X';
        }else{
            this.counter++; 
            alert("Player two, make a move");
            console.log(this.counter); 
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
        let displayText = mark; 
        let node = document.querySelector(`.c${position}`);
        node.textContent = displayText ; //mark is either'X' or 'O' and is collected as the return of populate board
    }
    checkForWin(){
        let board = this.board; 
        switch(true){
            //horizontal win 
            case board[0]==board[1] && board[1]==board[2]:
                alert(`The winner is: ${board[0]}`);  
                break;
            case board[3]==board[4] && board[4]==board[5]:
                alert(`The winner is: ${board[3]}`);
                break;
            case board[6]==board[7] && board[7]==board[8]:
                alert(`The winner is: ${board[6]}`);
                break;
            //Vertical win 
            case board[0]==board[3] && board[3]==board[6]:
                alert(`The winner is: ${board[0]}`);
                break;
            case board[1]==board[4] && board[4]==board[7]:
                alert(`The winner is: ${board[1]}`);
                break;
            case board[2]==board[5] && board[5]==board[8]:
                alert(`The winner is: ${board[2]}`);
                break;
            //diagonal win
            case board[0]==board[4] && board[4]==board[8]:
                alert(`The winner is: ${board[0]}`);
                break;
            case board[2]==board[4] && board[4]==board[6]:
                alert(`The winner is: ${board[2]}`);
                break;
            default:
                alert(`No winner found`);
        }
    }
    gameRunner(){
        allPanels.forEach((panel) => {
            panel.addEventListener('click', (e) => {
                let positionToSend = e.target.textContent;
                let receivedMark = this.populateBoard(positionToSend);
                this.displayWizard(receivedMark,positionToSend);
            })
         })
    }
}


//Controller would handle starting the game sequence, create the umpire and pass in the players name and id to the umpire collected from the registry