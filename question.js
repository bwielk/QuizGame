var Question = function(question, answerA, answerB, answerC, correct){
	this.question = question;
	this.answerA = answerA;
	this.answerB = answerB;
	this.answerC = answerC;
	this.correctAns = function(){
		if(correct.toLowerCase() === "a"){
			return this.answerA;
		}else if(correct.toLowerCase() === "b"){
			return this.answerB;
		}else if(correct.toLowerCase() ==="c"){
			return this.answerC;
		}else{
			console.log(this);
			console.log("Wrong option.Try again");
		}
	};
};

module.exports = Question;