//Board mappings 
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');
const sixth = document.querySelector('.sixth');
const seventh = document.querySelector('.seventh');
const eighth = document.querySelector('.eighth');
const ninth = document.querySelector('.ninth');

let allPanels = document.querySelectorAll('.control-panel')

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
        let counter = this.counter 
        while(counter <= 9){
            if (counter % 2 != 0) {
                alert("Player one, make a move");
                counter++;
                return 'X';
            }else{
                alert("Player two, make a move");
                counter++;
                return 'O'
            }
        }
        console.log('counter have finish')  
    }
    populateBoard(position){
        let board = this.board;
        position = parseInt(position);
        //Position is the textcontent of the node and serves as the board index 
        //Position is parsed to int 
        let  mark = this.whosTurn();//whosTurn is called to alternate marker.
        board[position] = mark;  
        return [board, mark]; 
    }    
    displayWizard(mark,position){
        let node = document.querySelector(`.c${position}`);
        node.textContent = mark ; //mark is either'X' or 'O' and is collected as the return of populate board
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
                console.log(positionToSend)
                let receivedMark = this.populateBoard(positionToSend);
                this.displayWizard(receivedMark,positionToSend);
                this.checkForWin();
            })
         })
    }
}


//Controller would handle starting the game sequence, create the umpire and pass in the players name and id to the umpire collected from the registry