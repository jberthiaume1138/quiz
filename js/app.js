'use strict'

var questionLocation = 0;
var correctAnswers;

var questions = [{
		number: '1',
		question: 'In the special 3rd Annual issue of this comic book series, these two characters were married in a huge ceremony attended by much of the of the comic book world.',
		choices: ['Clark Kent and Lois Lane','Sue Storm and Reed Richards','Aquaman and SpongeBob SquarePants','Cyclops and Jean Grey' ],
		answer: '2',
		explanation: 'Sue Storm, aka The Invisible Woman, and Reed Richards, aka Mr. Fantastic...'
	},
	{	number: '2',
		question: 'Who is Fido?',
		choices: ["A term of endearment Cyclops uses for Wolverine","Batman's giant mechanical tyranasaurus","The code name for Captain America's shield","Punisher's pit bull"],
		answer: '2',
		explanation: 'blah blah blah'
	},
	{
		number: '3',
		question: 'The Man Without Fear is a nickname for:',
		choices: ['Batman','Ironman','Daredevil','The Flash'],
		answer: '3',
		explanation: 'More exposition write later'
	},
	{
		number:'4',
		question:"Captain America's shield is made of:",
		choices:['adamantium','vibranium','titanium','sheldonium'],
		answer: '2',
		explanation: 'more exposition'
	},
	{
		number: '5',
		question:'Piotr Nikolaievitch Rasputin is the real name of this member of the X-men.',
		choices:['Colossus','Magneto','Deadpool','Nightcrawler'],
		answer: '1',
		explanation:'blah blah'
	}];


document.onload = restartGame();

document.getElementById('btn-restart').addEventListener('click',function(event) {
	restartGame();
});

document.getElementById('btn-next').addEventListener('click',function(event) {
	// handler to ... submit the answer to the current question
	// get the answer, then pass it into th evaluator
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
