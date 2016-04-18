'use strict'

var questionIndex;
var correctAnswers;

document.onload = restartGame();

document.getElementById('btn-restart').addEventListener('click',function(event) {
	restartGame();
});

function restartGame() {
	// resets running totales, moves to first question, populates fields
	questionIndex = 0;
	correctAnswers = 0;

	populateQuestion();
//	console.log(questions[questionIndex].answer);
};

document.getElementById('btn-next').addEventListener('click',function(event) {
	// handler to get the selected choice and submit it for evaluation
	submitAnswer(document.querySelector('input[name=choices]:checked').value);
});	

function populateQuestion () {
	// first load the question from the file
	document.getElementById('question').innerHTML = questions[questionIndex].question;
	//then load the choices from the file
	var listOfLabels = document.getElementsByClassName('choice-labels');
	for (var i = 0; i < listOfLabels.length; i++) {
		listOfLabels.item(i).innerHTML = questions[questionIndex].choices[i];
		// console.log (questions[questionIndex].choices[i]);
		// console.log (listOfLabels.item(i).innerHTML);
	}
}

function submitAnswer(choice) {		// evaluate the choice agsinst the quiz answer
	if (choice == questions[questionIndex].answer) {
		console.log('Question ' + questionIndex + ' correct!');
		console.log(questions[questionIndex].choices[choice]);
		
		correctAnswers++; // increment the total number of correct answers
		console.log(correctAnswers);

		// var score = '<p id="score"> Score: ' + correctAnswers + ' out of ' + questionIndex + '</p>';
		// document.getElementById('question-header-wrapper').innerHTML += score;

		// correct();
	}
	else {
		wrongAnswer();
	}

	if (questionIndex + 1 == questions.length) {
		gameOver();
	}
	else {
		questionIndex++;
		populateQuestion();
	}
};

function correct() {
	// change a bunch of output to show correct choice
	var output = '<h2>Correct!</h2><p>' + questions[questionIndex].explanation + '</p>';

	document.getElementById('explanation').innerHTML += output;
	//document.getElementById('explanation');

	document.getElementById('main').style.display = 'none';
	document.getElementById('explanation').style.display = 'block';
};

function wrongAnswer () {
	// generate a bunch of output to show wrong choice
	console.log('wrong!');
};

document.getElementById('play-again').addEventListener('click',function(event) {
	restartGame();
});

function gameOver() {
	console.log(correctAnswers);
	document.getElementById('main').style.display = 'none';
	
	var gameOverSplash = document.getElementById('game-over');
		
	var output = 'You got ' + correctAnswers + ' out of ' + questions.length + ' correct';

	if (correctAnswers == questions.length) {
		gameOverSplash.innerHTML += '<h2>Excelsior!</h2><br/><h3>You are a champion! Worthy of joining the X-men, the Avengers or the Justice League.<br/>Just remember, with great power, comes great responsibility.';
	}
	else if ((correctAnswers >= 3) && (correctAnswers <= 5)) {
		gameOverSplash.innerHTML += '<h2>Well done shell-head!</h2><br/><h3>You are clearly an expert worthy of a spot in Charles Xavier\'s School.</h3>';
	}
	else if ((correctAnswers >= 1) && (correctAnswers < 3)) {
		gameOverSplash.innerHTML += '<h2>Not ready for the Justice League just yet.</h2><br/><h3>You should head over to the Danger Room for more training. Watch out for for Wolverine\'s claws.</h3>'; 
	}
	else if (correctAnswers <= 1) {
		gameOverSplash.innerHTML += '<h2>Sad face.</h2><h3>Stop wasting time taking internet quizes and go to the comic book store before the Hulk sits on your head.</h3>';
	}

	gameOverSplash.style.display = 'block';

};