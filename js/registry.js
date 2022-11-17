//Player factory
const registerPlayers = () => {
    const player1 = listenForPlayer1(); 
    return {player1};
};
//Runs to store id of the game for saving
let gameId = {
    get id(){
        return this._id;
    },
    set id(value){
        return this._id = value;
    }
}