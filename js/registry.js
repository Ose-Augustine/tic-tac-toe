//Player factory
const Player = (name,marker) => {
    const sayName = () => name;
    const sayMarker = () => marker;
    return {sayName, sayMarker};
}
let clicks = 2; 
//Access the DOM
let player1 = document.querySelector('.register-player-1');
let player2 = document.querySelector('.register-player-2');

//Create player object for every click. 
//Return the player's name and marker for use in local storage
function listenForPlayer1(){
    let info = {name:'',marker:''}; 
    player1.addEventListener('click',(e)=>{
        let uniqueGameId = prompt('Give this game a unique name:');
        info.name = prompt('Player1 enter name:');
        info.marker = 'X'
        clicks = clicks - 1; 
        e.target.style.display = 'none'; //Once player is registered, hide button
    })
    return info; 
}
function listenForPlayer2(){
    let info = {name:'',marker:''}; 
    player2.addEventListener('click',(e)=>{
        info.name = prompt('Player2 enter name:');
        info.marker = 'O'; 
        clicks = clicks - 1; 
        e.target.style.display = 'none'; //Once player is registered, hide button
    });
    return info; 
}


if (clicks === 0){
    //run the next code block 
}


