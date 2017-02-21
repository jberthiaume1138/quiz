'use strict'

class Quiz {
	constructor() {
		this.questionIndex = '';
		this.correctAnswers = '';
	}

	restartGame() {
		// resets running totals, moves to first question, populates fields
		this.questionIndex = 0;
		this.correctAnswers = 0;

		document.getElementById('main').style.display = 'flex';
		document.getElementById('game-over').style.display = 'none';

		this.populateQuestion();
	}

	populateQuestion() {
		document.getElementById('choice-0').classList.remove('choice-selected');
		document.getElementById('choice-1').classList.remove('choice-selected');
		document.getElementById('choice-2').classList.remove('choice-selected');
		document.getElementById('choice-3').classList.remove('choice-selected');

		// load the question from the array of objects in the file
		document.getElementById('question').innerHTML = questions[this.questionIndex].question;

		//load the current question # in the header
		document.getElementById('question-header').innerHTML = 'Question #' + (this.questionIndex + 1);

		// //then load the choices from the array of objects in the file for that question
		var listOfParagraphs = document.getElementsByClassName('choice-text');
		for (var i = 0; i < listOfParagraphs.length; i++) {
			listOfParagraphs.item(i).innerHTML = '';
			listOfParagraphs.item(i).innerHTML += questions[this.questionIndex].choices[i];
		}
	}

	evaluateAnswer(choice) {		// evaluate the choice against the quiz answer
		if (choice == questions[this.questionIndex].answer) {
			// the answer is correct

			console.log('Question ' + this.questionIndex + ' correct ' + questions[this.questionIndex].choices[choice]);

			this.correctAnswers++; // increment the total number of correct answers

			console.log(this.correctAnswers);

		}
		else {
			// the answer is wrong
			console.log('wrong');
			//do some stuff
		}

		// check location in question array, game over if that was the last question
		if ((this.questionIndex + 1) == questions.length) {
			this.gameOver();
		}
		else {		// otherwise, increment the counter and populate the HTML with the next question
			this.questionIndex++;
			this.populateQuestion();
		}
	}

	gameOver() {
		console.log(this.correctAnswers);
		document.getElementById('main').style.display = 'none';

		var gameOverSplash = document.getElementById('game-over');
		gameOverSplash.innerHTML = ''; // clear

		var output = 'You got ' + this.correctAnswers + ' out of ' + questions.length + ' correct';

		if (this.correctAnswers == questions.length) {
			gameOverSplash.innerHTML += '<h2>Excelsior!</h2><h3>You are a champion! Worthy of joining the X-men, the Avengers or the Justice League. Just remember, with great power, comes great responsibility.';
			gameOverSplash.innerHTML += '<img src="images/stanlee.jpg">';
		}
		else if ((this.correctAnswers >= 3) && (this.correctAnswers <= 5)) {
			gameOverSplash.innerHTML += '<h2>Well done shell-head!</h2><br/><h3>You are clearly an expert worthy of a spot in Charles Xavier\'s School for the Gifted.</h3>';
		}
		else if ((this.correctAnswers >= 1) && (this.correctAnswers < 3)) {
			gameOverSplash.innerHTML += '<h2>You are not ready for the Justice League yet.</h2><br/><h3>Head over to the Danger Room for more training.<br/>Watch out for for Wolverine\'s claws.</h3>';
		}
		else if (this.correctAnswers <= 1) {
			gameOverSplash.innerHTML += '<h2>Sad face</h2><h3>Stop wasting time taking internet quizes and go to the comic book store before the Hulk sits on your head.</h3>';
			gameOverSplash.innerHTML += '<img src="images/hulk.gif">';
		}


		gameOverSplash.innerHTML += '<button id="play-again">Play Again</button>';

		gameOverSplash.style.display = 'flex';

		document.getElementById('play-again').addEventListener('click',function(event) {
			this.restartGame();
		});
	}
}

const ComicBookQuiz = new Quiz();

document.onload = ComicBookQuiz.restartGame();

document.getElementById('btn-restart').addEventListener('click',function(event) {
	document.getElementById('btn-next').style.display = 'none';
	document.getElementById('btn-confirm').style.display = 'inline-block';
	document.getElementById('btn-restart').style.display = 'none';
	document.getElementById('btn-cancel').style.display = 'inline-block';
	document.getElementById('restart-warning').style.display = 'block';
});

document.getElementById('btn-confirm').addEventListener('click',function(event) {
	document.getElementById('btn-next').style.display = 'block';
	document.getElementById('btn-confirm').style.display = 'none';
	document.getElementById('btn-restart').style.display = 'block';
	document.getElementById('btn-cancel').style.display = 'none';
	document.getElementById('restart-warning').style.display = 'none';
	ComicBookQuiz.restartGame();
});

document.getElementById('btn-cancel').addEventListener('click',function(event) {
	document.getElementById('btn-next').style.display = 'block';
	document.getElementById('btn-confirm').style.display = 'none';
	document.getElementById('btn-restart').style.display = 'block';
	document.getElementById('btn-cancel').style.display = 'none';
	document.getElementById('restart-warning').style.display = 'none';
	ComicBookQuiz.restartGame();
});

document.getElementById('choice-0').addEventListener('click',function(event) {
	this.classList.add('choice-selected');
	document.getElementById('choice-1').classList.remove('choice-selected');
	document.getElementById('choice-2').classList.remove('choice-selected');
	document.getElementById('choice-3').classList.remove('choice-selected');

	document.getElementById('0').checked = true;
});

document.getElementById('choice-1').addEventListener('click',function(event) {
	document.getElementById('choice-0').classList.remove('choice-selected');
	this.classList.add('choice-selected');
	document.getElementById('choice-2').classList.remove('choice-selected');
	document.getElementById('choice-3').classList.remove('choice-selected');

	document.getElementById('1').checked = true;
});

document.getElementById('choice-2').addEventListener('click',function(event) {
	document.getElementById('choice-0').classList.remove('choice-selected');
	document.getElementById('choice-1').classList.remove('choice-selected');
	this.classList.add('choice-selected');
	document.getElementById('choice-3').classList.remove('choice-selected');

	document.getElementById('2').checked = true;
});

document.getElementById('choice-3').addEventListener('click',function(event) {
	document.getElementById('choice-0').classList.remove('choice-selected');
	document.getElementById('choice-1').classList.remove('choice-selected');
	document.getElementById('choice-2').classList.remove('choice-selected');
	this.classList.add('choice-selected');

	document.getElementById('3').checked = true;
});

document.getElementById('btn-next').addEventListener('click',function(event) {
	// handler to get the selected choice and submit it for evaluation
	ComicBookQuiz.evaluateAnswer(document.querySelector('input[name=choices]:checked').value);
});
