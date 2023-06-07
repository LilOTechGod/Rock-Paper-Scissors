// Variables for keeping track of score
var wins = 0;
var losses = 0;
var ties = 0;

// Array of options for computer to pick from
var options = ["r", "p", "s"];


// function for user to choose their R, P, or S
var PlayGame = function () {
    var userInput = prompt("How about a round of Rock, Paper, scissors?" + "\nType in r for Rock, p for paper, or s for scissors");
    // if user pressed cancel,end function
    if (!userInput) {
        return;
    }
    
    // math.random and floor for computer choice
    var computerInput = Math.floor(Math.random() * options.length);
    var computerChoice = options[computerInput];

    window.alert("Your Opponent chose: " + "\n" + computerChoice);

    // if statement for choices that are the same(tie)
    if (userInput === computerChoice) {
        window.alert("It's a tie!")
        ties++
        // check every win condition for the player;
    } else if (
        (userInput === "r" && computerChoice === "s") ||
        (userInput === "s" && computerChoice === "p") ||
        (userInput === "p" && computerChoice === "r")
    ) {
        wins++
        window.alert("You Won! (:");
        // if aboove conditions failed, assume player lost
    } else {
        losses++
        window.alert("You've lost! ):");
    }

    // print stats with line breaks
    window.alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

    // ask user to play again
    var optPlayAgain = window.confirm("Do you want to play again?")

    // if user pressed ok, run the function again
    if (optPlayAgain) {
        PlayGame();
    } else {
        window.alert("Thanks for playing! (:")
    }
};

// run the game for the first time
PlayGame();