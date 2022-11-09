//Controller stores the players and makes it available 
//to the umpire 
//Controller would be the only link between umpire and registry
//and can call on them to function
//Controller is my brain (lol)! 
(function Controller(){
    let players = registerPlayers();
    console.log(players);
    let umpire  = new Umpire();
    umpire.gameRunner();
})();