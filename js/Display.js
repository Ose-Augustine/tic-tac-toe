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