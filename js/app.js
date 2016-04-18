'use strict'

var questionIndex = 0;
var correctAnswers = 0;



document.onload = restartGame();

document.getElementById('btn-restart').addEventListener('click',function(event) {
	restartGame();
});

function restartGame() {
	// set question position
	// 0 out running total variables
	// load first question
	
	populateQuestion();
	console.log(questions[questionIndex].answer);
};

document.getElementById('btn-next').addEventListener('click',function(event) {
	// handler to ... submit the answer to the current question
	// console.log('you selected ' + document.querySelector('input[name=choices]:checked').value);
	submitAnswer(document.querySelector('input[name=choices]:checked').value);
});	

function populateQuestion () {
	document.getElementById('1').innerHTML = questions[questionIndex].choices['0'];
}

function submitAnswer(choice) {		// evaluate the choice agsinst the quiz answer
	if (choice == questions[questionIndex].answer) {
		console.log('Question ' + questionIndex + ' correct!');
		console.log(questions[questionIndex].choices[choice]);
		correctAnswers++; // increment the total number of correct answers

		var score = '<p id="score"> Score: ' + correctAnswers + ' out of ' + questionIndex + '</p>';
		document.getElementById('question-header-wrapper').innerHTML += score;

		correct();
	}
	else {
		wrongAnswer();
	}

};

function correct() {
	// change a bunch of output to show correct choice
	var output = '<h2>Correct!</h2><p>' + questions[questionIndex].explanation + '</p>';

	document.getElementById('explanation').innerHTML += output;
	//document.getElementById('explanation');

};

function wrongAnswer () {
	// generate a bunch of output to show wrong choice
	console.log('wrong!');
};

function gameOver() {
	// logic branch to generate output based on final score
	// show start over button
	// clear running total variables, question position etc
};