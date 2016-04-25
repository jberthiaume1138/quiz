'use strict'

// TODO:
// question explanations ... possibly some kind of modal overlay box
// running total of score + positioning
// all the CSS
var Quiz = {

	questionIndex: '',
	correctAnswers: '',

	restartGame: function() {
		// resets running totals, moves to first question, populates fields
		Quiz.questionIndex = 0;
		Quiz.correctAnswers = 0;

		document.getElementById('main').style.display = 'block';
		// document.getElementById('footer').style.display = 'block';
		document.getElementById('game-over').style.display = 'none';

		Quiz.populateQuestion();
	},

	populateQuestion: function() {
		document.getElementById('choice-0').classList.remove('choice-selected');
		document.getElementById('choice-1').classList.remove('choice-selected');
		document.getElementById('choice-2').classList.remove('choice-selected');
		document.getElementById('choice-3').classList.remove('choice-selected');

		// load the question from the array of objects in the file
		document.getElementById('question').innerHTML = questions[Quiz.questionIndex].question;
		
		//load the current question # in the header
		document.getElementById('question-header').innerHTML = 'Question #' + (Quiz.questionIndex + 1);
		
		// //then load the choices from the array of objects in the file for that question
		// var listOfLabels = document.getElementsByClassName('choice-labels');
		// for (var i = 0; i < listOfLabels.length; i++) {
		// 	// listOfLabels.item(i).innerHTML = '';
		// 	listOfLabels.item(i).innerHTML = questions[Quiz.questionIndex].choices[i];
		// }
		
		// //then load the choices from the array of objects in the file for that question
		// var listOfDivs = document.getElementsByClassName('choice');
		// for (var i = 0; i < listOfDivs.length; i++) {
		// 	listOfDivs.item(i).innerHTML = '';
		// 	listOfDivs.item(i).innerHTML += '<input class="radios" type="radio" id="' + Quiz.questionIndex + '" name="choices" value="' + Quiz.questionIndex + '">';
		// 	listOfDivs.item(i).innerHTML += questions[Quiz.questionIndex].choices[i];
		// 	console.log (questions[Quiz.questionIndex]);
		// }

		var listOfParagraphs = document.getElementsByClassName('choice-text');
		for (var i = 0; i < listOfParagraphs.length; i++) {
			listOfParagraphs.item(i).innerHTML = '';
			listOfParagraphs.item(i).innerHTML += questions[Quiz.questionIndex].choices[i];
			console.log (questions[Quiz.questionIndex]);
		}

		

		

		// clear the radio button --- fix this up later
		// var radios = document.getElementsByClassName('');
		// for (var i = 0; i < listOfLabels.length; i++) {
		// 	document.getElementById('i').checked = false;	
		// } 

		// document.getElementById('0').checked = false;
		// document.getElementById('1').checked = false;
		// document.getElementById('2').checked = false;
		// document.getElementById('3').checked = false;
	},

	evaluateAnswer: function(choice) {		// evaluate the choice against the quiz answer
		if (choice == questions[Quiz.questionIndex].answer) {
			// the answer is correct

			console.log('Question ' + Quiz.questionIndex + ' correct ' + questions[Quiz.questionIndex].choices[choice]);
			
			Quiz.correctAnswers++; // increment the total number of correct answers
			
			console.log(Quiz.correctAnswers);


			//do some stuff

			// var score = '<p id="score">Score: ' + correctAnswers + ' out of ' + (Quiz.questionIndex + 1) + ' correct</p>';
			// document.getElementById('question-header-wrapper').innerHTML += score;

			// // change a bunch of output to show correct choice
			// var output = '<h2>Correct!</h2><p>' + questions[Quiz.questionIndex].explanation + '</p>';

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
		if ((Quiz.questionIndex + 1) == questions.length) {
			Quiz.gameOver();
		}
		else {		// otherwise, increment the counter and populate the HTML with the next question
			Quiz.questionIndex++;
			Quiz.populateQuestion();
		}
	},

	gameOver: function() {
		console.log(Quiz.correctAnswers);
		document.getElementById('main').style.display = 'none';
		// document.getElementById('footer').style.display = 'none';
		
		var gameOverSplash = document.getElementById('game-over');
		gameOverSplash.innerHTML = ''; // clear

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
			Quiz.restartGame();
		});
	}
};



document.onload = Quiz.restartGame();

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
	Quiz.restartGame();
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

	Quiz.evaluateAnswer(document.querySelector('input[name=choices]:checked').value);
});	