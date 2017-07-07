var is = require('assert');
var Question = require('../question');

describe("QuestionTest", function(){
	var question1;
	var question2;

	beforeEach("Setup", function(){
		question1 = new Question("What's your name?", "Blaise", "Thom", "Alex", "A");
		question2 = new Question("What's Arthur's name?", "Adam", "Arthur", "Alex", "B");
	}),

	it("should have a question", function(){
		is.equal("What's your name?", question1.question);
	}),

	it("should have answers", function(){
		var answer1 = question1.answerA;
		var answer2 = question1.answerB;
		var answer3 = question1.answerC;
		is.equal("Blaise", answer1);
		is.equal("Thom", answer2);
		is.equal("Alex", answer3);
	}),

	it("should have a correct answer", function(){
	is.equal("Blaise", question1.correctAns());
	is.equal("Arthur", question2.correctAns());
	})
})