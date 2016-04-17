'use strict'

var questionLocation = 0;
var correctAnswers;

var questions = [{
		number: '1',
		question: 'In the special 3rd Annual issue of this comic book series, these two major characters were married in a huge ceremony attended by much of the rest of the comic book world.',
		choices: ['Clark Kent and Lois Lane','Sue Storm and Reed Richards','Aquaman and SpongeBob SquarePants','Cyclops and Jean Grey' ],
		answer: '2',
		explanation: 'Sue Storm, aka The Invisible Woman, and Reed Richards, aka Mr. Fantastic...'
	},
	{	number: 2,
		question: 'Who is Fido?',
		choices: ["A term of endearment Cyclops uses for Wolverine","Batman's giant mechanical tyranasaurus","The code name for Captain America's shield"],
		answer: 2,
		explanation: 'blah blah blah'
	}];


document.onload = restartGame();

document.getElementById('btn-restart').addEventListener('click',function(event) {
	restartGame();
});

document.getElementById('btn-next').addEventListener('click',function(event) {
	// handler to ...
	// ... submit the answer to the current question
	var answer = 1;
	submitAnswer(answer);
});	

//need event handler for chosen answer


function restartGame(){
	document.getElementById('question-header').innerHTML = 'Question 1 of 5';

};

function setQuestion() {
	// moves the game to the current question
};

function submitAnswer(answer) {
	// accepts answer choice, evaluates it
	console.log(questions[questionLocation].answer);
	if (answer == questions[questionLocation].answer) {
		console.log('correct');
		correctAnswers++;
		//correct();
	}
	else {
		console.log('wrong');
		// wrong();
	}

};
