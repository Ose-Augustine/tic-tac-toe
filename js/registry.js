//Player factory
const Player = (name,marker) => {
    const sayName = () => name;
    const sayMarker = () => marker;
    return {sayName, sayMarker};
}
//Access the DOM
let player1 = document.querySelector('.register-player-1');
let player2 = document.querySelector('.register-player-2');

//Create player object for every click. 
//Return the player's name and marker for use in local storage
player1.addEventListener('click',(e)=>{
    let uniqueGameId = prompt('Give this game a unique name:');
    let name = prompt('Player1 enter name:');
    let info = Player(name,'X');
    e.target.style.display = 'none';
})
player2.addEventListener('click',()=>{
    let name = prompt('Player2 enter name:');
    let info = Player(name,'O');
});


