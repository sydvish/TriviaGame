// For loop that cycles through the questions in the "form-group" class and appends them to the actual webpage
// Timer coundown and button functions
var number = 30;
var intervalId;
var correct = 0;

for (var i = 0; i < myQuestions.length; i++) {

    var $formGroup = $("<div class='form-group'>")
        .append($("<label>" + myQuestions[i].question + "</label>"))
        .append($("<br>"));
        
        
    // for lopp within the existing loop that cycles through the answers 
    for (var j = 0; j < myQuestions[i].answers.length; j++) {

        var $label = $("<label class='form-check-label'>")
            .text(myQuestions[i].answers[j]);
        var $input = $("<input type='radio' class='form-check-input'>")
            .attr("name", "q" + i)
            .attr("value", myQuestions[i].answers[j])
        
        var $formCheck = $("<div class='form-check form-check-inline'>")
            .append($input)
            .append($label);
        $formGroup.append($formCheck);

        
    }

    $("form").append($formGroup);


}



// On click to stop timer when done button is pushed
$("#done").on("click", function () {
    stop();
});

// run function to start the timer and count down 1 second at a time
function run() {
    intervalId = setInterval(decrement, 1000);

}
function decrement() {
    number--;
    //  countdown function, shows timer on page and stops timer when it reaches 0
    $("#timer").html("<h3>" + "Time Remaining: " + number + " Seconds!" + "</h3>");
    
    if (number === 0) {
        stop();
    }
}
// stop function, clear time and stop timer
function stop() {
    calculateScore();
    clearInterval(intervalId);
    clockRunning = false;
}
function reset() {
    if (number === 0) {
        reset();
        $("#timer").html(number);
    }
}
run();

// setTimeout fucntion makes it so that after all the questions are chosen there is a 10 second delay (if the timer has more than 10 seconds left), before the correct answers are calculated. 

// correct value set to 0

// Line 88 is callback funtion-asking for the items checked that are in the form-group.


function calculateScore(){
    $(".form-group input:checked").each(function(i){
        if(myQuestions[i].correctAnswer === this.value){
            correct++;
        }
    });
    
    $("form").empty();
    $("#timer").html("<h3>" + "You got " + correct + " out of " + myQuestions.length + " correct!" + "</h3>");

    console.log("You got " + correct + " out of " + myQuestions.length + " correct!");
}

