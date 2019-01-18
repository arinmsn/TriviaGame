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
var InstructionMsg = "You will have 5 minutes to answer the 10 questions.<br>"
    + "Simply match the correct quote statement with the title name.<br>"
    + "Press the start button to get started. Let's see how well you know these movies!<br>"
    + "Good luck!<br>"

var quizQuestions = [{  //Question #1
    question: "I'll get you, my pretty, and your little dog, too!",  
    answerList: ["Scooby-Doo 2", "The Departed", "RoboCop", "The Wizard of Oz"],
    answer: 3
},{                     //Question #2
    question: "I feel the need ─ the need for speed!",  
    answerList: ["The Fast & Furious", "Avengers: Infinity War", "Top Gun", "The World's End"],
    answer: 2
},{                     //Question #3
    question: "A martini. Shaken, not stirred.",  
    answerList: ["M*A*S*H", "Casino Royale", "Beautiful Girls", "Goldfinger"],
    answer: 3
},{                     //Question #4
    question: "Yo, Adrian!",  
    answerList: ["Watchmen", "Rocky", "Little Nicky", "Shark Tale"],
    answer: 1
},{                     //Question #5
    question: "Frankly, my dear, I don't give a damn.",  
    answerList: ["The Maltese Falcon", "Gone with the Wind", "The Devil Wear Prada", "The Big Sleep"],
    answer: 1
},{                     //Question #6
    question: "You talking to me?",  
    answerList: ["Scarface", "Wonderfalls", "Mean Girls", "Taxi Driver"],
    answer: 3
},{                     //Question #7
    question: "Your gonna need a bigger boat.",  
    answerList: ["A Night to Remember", "Jaws", "Rugrats Go Wild", "Pirates of the Caribbean: Dead Man's Chest"],
    answer: 1
},{                     //Question #8
    question: "It's alive! It's alive!",  
    answerList: ["The Brothers Grimm", "Alien", "The Lion King", "Frankenstein"],
    answer: 3
},{                     //Question #9
    question: "Keep your friends close, but your enemies closer.",  
    answerList: ["Blade II", "Godfather II", "A Few Good Men", "Batman Begins"],
    answer: 1
},{                     //Question #10
    question: "A boy's best friend is his mother.",  
    answerList: ["Mommie Dearest", "Motherhead", "Mom and Dad Save the World", "Psycho"],
    answer:  3
}];



/* Variables */
var correctAnswer;
var incorrectAnswer;
var unanswered;

var time;
var seconds;

var userSelect;
var answered; // false?
var currentQuestion;

function welcomeScreen() {
    $('.instructMessage').html(InstructionMsg);
    $('.startBtn').on('click', function() {
        $(this).hide();
        $('.instructMessage').css("display", "none");
        BeginGame();
    });
}

welcomeScreen();
// The beginning 

$('startAgain').on('click', function() {
    $(this).hide();
    BeginGame();
});

// Game starts 
function BeginGame(){
    $('#finalMessage').empty();
    $('#correctAnswers').empty();
    $('#incorrectAnswers').empty();
    $('#unanswered').empty();
    currentQuestion = 0;
    correctAnswer   = 0;
    incorrectAnswer = 0;
    unanswered      = 0;
    nextQuestion();
}

function nextQuestion(){
    answered = true;

    // Initializes the list of questions & answers
    $('#questionsLeft').html( (currentQuestion+1) + " out of " + quizQuestions.length );
    for (var i; i < 4; i++){
        var choices = $('<div>');
        choices.text(quizQuestions[currentQuestion].answerList[i]);
        choices.attr({'data-index': i});
        choices.addClass('thisChoice');
        $('.answerList').append(choices);
    }

    countDown();

}

function countDown(){
    seconds = 10;  // Testing with 10 seconds first, match it to instructions
    $('#timeLeft').html('<p class="lead">' + seconds + ' Left </p>'); //may need to manually add class
    answered = true;
    time = setInterval(showCountDown, 1000);
}

function showCountDown() {
    seconds--;
    $('#timeLeft').html('<p class="lead">' + seconds + ' Left </p>')
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        checkAnaswer();
    }
}

// Checking for answers
function checkAnaswer() {

}

function scoreIt() {
    
    $('#timeLeft').empty();
    
    $('#correctAnswers').html("Correctly answered: " + correctAnswer);
    $('#inncorrectAnswers').html("Incorrectly answered: "+ incorrectAnswer);
    $('#unanswered').html("Unanswered: " + unanswered);
    $('#startOverBtn').addClass('reset');
    $('#startOverBtn').show();
    $('#startOverBtn').html('Play again?');
}