'use strict'

// TODO:
// question explanations ... possibly some kind of modal overlay box
// running total of score + positioning
// all the CSS

var questionIndex;
var correctAnswers;

document.onload = restartGame();

document.getElementById('btn-restart').addEventListener('click',function(event) {
	document.getElementById('btn-next').style.display = 'none';
	document.getElementById('btn-confirm').style.display = 'block';
	document.getElementById('btn-restart').style.display = 'none';
	document.getElementById('restart-warning').style.display = 'block';
});

document.getElementById('btn-confirm').addEventListener('click',function(event) {
	document.getElementById('btn-next').style.display = 'block';
	document.getElementById('btn-confirm').style.display = 'none';
	document.getElementById('btn-restart').style.display = 'block';
	document.getElementById('restart-warning').style.display = 'none';
	restartGame();
})

function restartGame() {
	// resets running totals, moves to first question, populates fields
	questionIndex = 0;
	correctAnswers = 0;

	document.getElementById('main').style.display = 'block';
	// document.getElementById('footer').style.display = 'block';
	document.getElementById('game-over').style.display = 'none';

	populateQuestion();
};

document.getElementById('btn-next').addEventListener('click',function(event) {
	// handler to get the selected choice and submit it for evaluation
	evaluateAnswer(document.querySelector('input[name=choices]:checked').value);
});	

function populateQuestion () {
	// first load the question from the array of objects in the file
	document.getElementById('question').innerHTML = questions[questionIndex].question;
	//then load the choices from the array of objects in the file for that question
	var listOfLabels = document.getElementsByClassName('choice-labels');
	for (var i = 0; i < listOfLabels.length; i++) {
		listOfLabels.item(i).innerHTML = questions[questionIndex].choices[i];
	}
	document.getElementById('question-header').innerHTML = 'Question #' + (questionIndex + 1);
}

function evaluateAnswer(choice) {		// evaluate the choice agsinst the quiz answer
	if (choice == questions[questionIndex].answer) {
		// the answer is correct

		console.log('Question ' + questionIndex + ' correct ' + questions[questionIndex].choices[choice]);
		
		correctAnswers++; // increment the total number of correct answers
		
		console.log(correctAnswers);


		//do some stuff

		// var score = '<p id="score">Score: ' + correctAnswers + ' out of ' + (questionIndex + 1) + ' correct</p>';
		// document.getElementById('question-header-wrapper').innerHTML += score;

		// // change a bunch of output to show correct choice
		// var output = '<h2>Correct!</h2><p>' + questions[questionIndex].explanation + '</p>';

		// document.getElementById('explanation').innerHTML += output;
		// //document.getElementById('explanation');

		// document.getElementById('main').style.display = 'none';
		// document.getElementById('explanation').style.display = 'block';
	}
	else {
		// the answer is wrong
		console.log('wrong');
		//do some stuff
	}

	// check location in question array, game over if that was the last question
	if ((questionIndex + 1) == questions.length) {
		gameOver();
	}
	else {		// otherwise, increment the counter and populate the HTML with the next question
		questionIndex++;
		populateQuestion();
	}
};

function gameOver() {
	console.log(correctAnswers);
	document.getElementById('main').style.display = 'none';
	// document.getElementById('footer').style.display = 'none';
	
	var gameOverSplash = document.getElementById('game-over');
		
	var output = 'You got ' + correctAnswers + ' out of ' + questions.length + ' correct';

	if (correctAnswers == questions.length) {
		gameOverSplash.innerHTML += '<h2>Excelsior!</h2><br/><h3>You are a champion! Worthy of joining the X-men, the Avengers or the Justice League.<br/>Just remember, with great power, comes great responsibility.';
		gameOverSplash.innerHTML += '<img src="images/stanlee.jpg">';
	}
	else if ((correctAnswers >= 3) && (correctAnswers <= 5)) {
		gameOverSplash.innerHTML += '<h2>Well done shell-head!</h2><br/><h3>You are clearly an expert worthy of a spot in Charles Xavier\'s School.</h3>';
	}
	else if ((correctAnswers >= 1) && (correctAnswers < 3)) {
		gameOverSplash.innerHTML += '<h2>Not ready for the Justice League just yet.</h2><br/><h3>You should head over to the Danger Room for more training. Watch out for for Wolverine\'s claws.</h3>'; 
	}
	else if (correctAnswers <= 1) {
		gameOverSplash.innerHTML += '<h2>Sad face</h2><h3>Stop wasting time taking internet quizes and go to the comic book store before the Hulk sits on your head.</h3>';
		gameOverSplash.innerHTML += '<img src="images/hulk.gif">';
	}

	gameOverSplash.innerHTML += '<button id="play-again">Play Again</button>';

	gameOverSplash.style.display = 'flex';

	document.getElementById('play-again').addEventListener('click',function(event) {
		restartGame();
	});

};


