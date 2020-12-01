/*
    Start by collecting your game data from your cookie(s) and assigning it to variable(s)...
    keep in mind that cookie data is stored as a string - be sure to use Number() if passing integers
    and JSON.parse if passing JSON as cookie data.
*/

let game = JSON.parse(Cookies.get("game"));

//you don't need to set all these variables, but you do need to use the Number() 
    //function for some of them to convert from a string
let player = game.player;  // player is an object
let playerName = player.name;
let playerHp = Number(player.hp);
let playerAttack = Number(player.attack);
let playerImage = player.image;

let cpu = game.cpu;  // cpu is an object
let cpuName = cpu.name;
let cpuHp = Number(cpu.hp);
let cpuAttack = Number(cpu.attack);
let cpuImage = cpu.image;

let log = [];  //empty array for battle log

// console.log(game);


document.querySelector('.player .name').innerHTML = playerName;
document.querySelector('.player .health').innerHTML = playerHp;
document.querySelector('.player img').src = playerImage;

document.querySelector('.cpu .name').innerHTML = cpuName;
document.querySelector('.cpu .health').innerHTML = cpuHp;
document.querySelector('.cpu img').src = cpuImage;


/*
    Deal with your "battle sequence" by:
        - Subtracting player attack damage from the CPU's health.
        - Record this action in your "battlelog" (tip: an array works well for the battlelog)
        - Subtracting CPU attack damage from the Player's health.
        - Record this action in your "battlelog"
        - Determining if there has been a win, loss, or draw.
        - Record the result in your "battlelog"
        - Save the updated game state (ie. player/cpu pokemon and health) to a cookie(s)
*/
    
function battle() {
    if(playerHp > 0 && cpuHp > 0) {
        attackButton.style.color = "red";
        cpuHp = cpuHp - playerAttack;
        playerHp = playerHp - cpuAttack;
        document.querySelector('.player .health').innerHTML = playerHp;
        document.querySelector('.cpu .health').innerHTML = cpuHp;
        let battlelog = document.querySelector('.battlelog');
        battlelog.innerHTML += '<li>' + playerName + ' inflicted ' + playerAttack + ' points of damage, and ' 
            + cpuName + ' inflicted ' + cpuAttack + ' points of damage.' + '</li>';
        // battle();
    }
}

let attackButton = document.querySelector(".game-button");
attackButton.innerHTML = "attack";
attackButton.addEventListener("click", function() {
    battle();
});

let surrenderButton = document.querySelector('.surrender');
surrenderButton.style.color = "green";
surrenderButton.addEventListener('click', function() {
    playerHp = 0;
});


/*
    - Use selectors to target and fill in the img, .name, and .health elements on battle.html
    - Display the .battlelog contents
    - If the battle is over, present the user with a button to go back to index.html to start a new round
      and also wipe the cookies. 
    - Otherwise, present the user with a button to refresh the page and complete the next battle sequence.
*/


