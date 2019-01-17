// Create Global variables
// Store answers 

// Start the game

// Listen to what user clicks on (which radio button aka answer)
// Let user use Keyboard if mouse cannot be detected OR ....
// Do not allow user to pick more than one answer per question!

// Timer starts when START button is pressed
// Check to see if time is up

// Check Answers 
// Need to track questions answered correctly, incorrectly, and missed (not answered)

// Arrays for each question, possible answers, and correct answer 
var quizQuestions = [{  //Question #1
    question: "I'll get you, my pretty, and your little dog, too!",  
    answerList: ["Scooby-Doo 2", "The Departed", "RoboCop", "The Wizard of Oz"],
    answer: 
},{                     //Question #2
    question: "I feel the need ─ the need for speed!",  
    answerList: ["The Fast & Furious", "Avengers: Infinity War", "Top Gun", "The World's End"],
    answer:
},{                     //Question #3
    question: "A martini. Shaken, not stirred.",  
    answerList: ["M*A*S*H", "Casino Royale", "Beautiful Girls", "Goldfinger"],
    answer:
},{                     //Question #4
    question: "Yo, Adrian!",  
    answerList: ["Watchmen", "Rocky", "Little Nicky", "Shark Tale"],
    answer:
},{                     //Question #5
    question: "Frankly, my dear, I don't give a damn.",  
    answerList: ["The Maltese Falcon", "Gone with the Wind", "The Devil Wear Prada", "The Big Sleep"],
    answer:
},{                     //Question #6
    question: "You talking to me?",  
    answerList: ["Scarface", "Wonderfalls", "Mean Girls", "Taxi Driver"],
    answer:
},{                     //Question #7
    question: "Your gonna need a bigger boat.",  
    answerList: ["A Night to Remember", "Jaws", "Rugrats Go Wild", "Pirates of the Caribbean: Dead Man's Chest"],
    answer:
},{                     //Question #8
    question: "It's alive! It's alive!",  
    answerList: ["The Brothers Grimm", "Alien", "The Lion King", "Frankenstein"],
    answer:
},{                     //Question #9
    question: "Keep your friends close, but your enemies closer.",  
    answerList: ["Blade II", "Godfather II", "A Few Good Men", "Batman Begins"],
    answer:
},{                     //Question #10
    question: "A boy's best friend is his mother.",  
    answerList: ["Mommie Dearest", "Motherhead", "Mom and Dad Save the World", "Psycho"],
    answer: 
}];

/* Variables */
var correctAnswer;
var incorrectAnswer;
var unanswered;

var time;
var seconds;

var userSelect;
var answered;
var currentQuestion;

/* Beginning */
$('startBtn').on('click', function() {
    $(this).hide();
    BeginGame();
});

$('playAgain').on('click', function() {
    $(this).hide();
    BeginGame();
});



