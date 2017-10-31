var play = true;
var weapons;
var enemy;
var user;



//This will function to start the game
function startGame() {
  var play = prompt("Would you like to play?");
}if ( play === true){
  var name1 = prompt("Enter your name.");
}if (user !== false){
  var enemy = prompt("Who would you like to fight? Grant or Tony.");
}if (enemy !== true){
  weapons = prompt("What weapons would you like to use bomb or laser gun?");
  console.log("Ready! Let the battle begin!");
  startCombat(name1);
}

//Function get damage
function getDamage(name1){
  return Math.floor((Math.random() * 5) + 1);
}

//Function life and attacking
function startCombat() {
  var playing = true;
  var userHealth = 40;
  var enemyHealth = 10;
  var wins = 0;

  while (playing) {
    if (wins === 3) {
      console.log("You won!!");
      break;
    }
    var choice = prompt("Do you want to attack or quit?");
    if (choice === "attach"){
      userHealth -= getDamage();
      enemyHealth -= getDamage();
      console.log(name1 + "'s health is now: " + userHealth + "!");
      console.log(enemy + "'s health is now: " + enemyHealth + "!");
    }
    else if (choice === "quit"){
      console.log("That's too bad you lose! Next time!");
      break;
    }
    if (userHealth <= 0) {
      console.log("You lose!");
      break;
    }
    if (enemyHealth <= 0) {
      wins++;
      enemyHealth =10;
      console.log("You won the fight!!");
    }

  //  if (play === true) {
      // userHealth -= getDamage();
      // enemyHealth -= getDamage();
      // console.log(name1 + "'s health is now: " + userHealth + "!");
      // console.log(enemy + "'s health is now: " + enemyHealth + "!");
    //}
  }
}

startGame();
