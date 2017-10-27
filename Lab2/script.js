//This will just only prompt you to play if you enter yes//
var play = prompt("Would you like to play a game?");

while (play!=="no"){
  play = prompt("Great! Enter your name. ");
    alert("Let the battle begin!");
    break;
}





//Health left//
var health = 40;
var enemyHealth = 10;
var playing = true;
var wins = 0;

while(playing){
  if (wins === 3) {
    console.log ("You won the game!");
    break;
  }
  health -= Math.floor(Math.random() * 2) + 1;
  enemyHealth -= Math.floor(Math.random() * 2) + 1;
  console.log("My health is " + health);
  console.log("Grant's health is " + enemyHealth);
  if (health <= 0 || enemyHealth <= 0) {
    console.log("You won the fight!");
   playing = false;
 }
}
