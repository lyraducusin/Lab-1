var play = true;
var playing = true;
var weapons;
var userHealth = 40;
var enemyHealth = 10;
var wins = 0;
var enemy;
var user;




function startGame() {
  var playing = prompt("Would you like to play?");
}if ( playing === true){
  var name = prompt("Enter your name.")
}if (user != false){
  var enemy = prompt("Who would you like to fight? Grant or Tony.");
}if (enemy !== true){
  weapons = prompt("What weapons would you like to use bomb or laser gun?");
  console.log("Ready! Let the battle begin!");
  startCombat();
}

function getDamage(){
 return Math.floor((Math.random() * 5) + 1);
}

function startCombat() {
 while (playing) {
 if (wins === 3) {
   console.log("You won!!");
   break;
   }
 if (userHealth <= 0) {
    console.log("You lose!");
  break;
   }
  if (play === true) {
   userHealth -= getDamage();
   enemyHealth -= getDamage();
   console.log(name + "'s health is now: " + userHealth + "!");
   console.log(enemy + "'s health is now: " + enemyHealth + "!");
  } if (enemyHealth <= 0) {
   wins++;
   enemyHealth =10;
   console.log("You won the fight!!");
   }
  }
}

startGame();
