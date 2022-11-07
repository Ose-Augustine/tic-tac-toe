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
//Controls the game logic 
//Umpire accepts the markers of the two players
//and provides the populateBoard function to accept players choice of
//board position
class Umpire{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.counter = 1; 

        this.board = ['','','','','','','','',''];//Remains the same for every instance of the umpire 
    }
    //Alternate marker 
    //X for odd counter
    //O for even counter 
    whosTurn(){
        let counter = this.counter 
        while(counter <= 9){
            if (counter % 2 != 0) {
                counter++;
                return 'X';
            }else{
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
        board[position] = this.whosTurn(); //whosTurn is called to alternate marker. 
        console.log(board); 
    }    
}

function displayWizard(mark,position){
    let nodeClass = toString(position);//position is the textcontent of the clicked control panel node
    let node = document.querySelector( `.${nodeClass}` );
    node.textContent = mark ; //mark is either'X' or 'O'
}

function checkForWin(board){
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