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

var InstructionMsg = "You will have 10 seconds per question.<br>"
    + "Simply match the correct quote statement with the title name.<br>"
    + "Press the start button to get started. Let's see how well you know these movies!<br>"
    + "Good luck!";

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
var answered; // 
var currentQuestion;

function welcomeScreen() {
    $('h1').html("Welcome to the famous movie quote quiz!<br>");
    $('.instructMessage').html(InstructionMsg);
    $('#radioBtns').css("display", "none");
    $('.startBtn').on('click', function() {
        $(this).hide();
        $('.instructMessage').css("display", "none");
        $('h1').css("display", "none");
        beginGame();
    });
}

welcomeScreen();
// The beginning 

$('#startOverBtn').on('click', function() {
    $(this).hide();
    beginGame();

});

// Game starts 
function beginGame(){
    // $('#finalMessage').empty();
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
    $('.jumbotron').css("display", "block");
    answered = true;
    $('#correctedAnswer').empty();
    // Initializes the list of questions & answers
    $('#questionsLeft').html('<p class="lead">' + (currentQuestion+1) + ' out of ' + quizQuestions.length + '</p>');
    $('.question').html('<h3 class="lead">' + 'Question: " ' + quizQuestions[currentQuestion].question + ' "</h3>');
    radioBtnGen();
    // for (var i=0; i < quizQuestions[currentQuestion].answerList.length; i++) {
    //     var choices = $('<div>');
    //     choices.text(quizQuestions[currentQuestion].answerList[i]);
    //     choices.attr({'data-index': 1});
    //     choices.addClass('thisChoice');
    //     $('.answerList').append(choices);
    // }

    /*    Radio buttons    */
    // function readioGenerator(label) {
    //     $radio = $('<input />', {type : "radio"});
    //     var $label = $('<label />', {text : label});
    //     var wrapper = $('<div />');
    //     wrapper.append($label).append($radio);
    //     $('div#after').append(wrapper);
    // }

    function radioBtnGen() {
        var data= quizQuestions[currentQuestion].answerList;
        var output="";
        var userSelect;            //dataList
    
        for(var i=0; i< data.length; i++) {
            userSelect=data[i];
            output+= '<input type="radio" class="thisChoice" value='+userSelect+' data-index=1 name="box1">'  + '   ' +userSelect+ '   '+'<br><br>';
            document.getElementById("dataList").innerHTML=output;
        }
    } 

    // userChoices();
    countDown();
    
    $('.thisChoice').on('click', function(){
            userSelect = $(this).data('index');
            clearInterval(time);
            checkAnswer();
    });
}

function countDown(){
    seconds = 10;
    $('#timeLeft').html('<p class="lead">' + seconds + ' seconds left </p>'); 
    answered = true;
    time = setInterval(decrement, 1000);
}

function decrement() {
    seconds--;
    $('#timeLeft').html('<p class="lead">' + seconds + ' seconds left </p>');
    if (seconds === 0) {               // <--- original one
        clearInterval(time);
        answered = false;
        checkAnswer();
    }

}

// Checking for answers
function checkAnswer() {
    $('#currentQuestion').empty();
    $('#questionsLeft').empty();
    // Question page
    $('.thisChoice').empty();
    $('.question').empty();
    $('#timeLeft').empty();
    $('#dataList').empty();
    $('.jumbotron').css("display", "none");

    var rigthAnswerIndex = quizQuestions[currentQuestion].answer;

    if ((userSelect == rigthAnswerIndex) && (answered == true)) {
        correctAnswer++;
    } else if ((userSelect != rigthAnswerIndex) && (answered == true)) {
        incorrectAnswer++;
    } else {
        unanswered++;
    }

    if(currentQuestion == (quizQuestions.length-1)) {
        setTimeout(scoreIt, 500);
    } else {
        currentQuestion++;
        setTimeout(nextQuestion, 500);
    }

}

function scoreIt() {
    $('.jumbotron').css("display", "block");
    $('#timeLeft').empty();
    $('#correctAnswers').html("Correctly answered: " + correctAnswer);
    $('#incorrectAnswers').html("Incorrectly answered: "+ incorrectAnswer);
    $('#unanswered').html("Unanswered: " + unanswered);
    // $('#startOverBtn').addClass('reset');
    // $('#startOverBtn').show();
    $('#startOverBtn').html('<button type="button" class="btn btn-primary">' + "Play Again?" + '</button>');
}