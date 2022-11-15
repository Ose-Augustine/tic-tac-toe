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
let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };
  