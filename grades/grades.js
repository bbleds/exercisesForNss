/* Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

A score between 50-60 is an F
A score between 61-70 is a D
A score between 71-80 is a C
A score between 81-90 is a B
A score between 91-100 is an A
Start with array of random scores in your JavaScript  


Use console.log to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade? */

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var fArry= [];
var dArry= [];
var cArry= [];
var bArry= [];
var aArry= [];



for (var i =0; i < scores.length; i++){
	if(scores[i] < 60){
		fArry.push(scores[i]);
	} else if(scores[i] < 70){
		dArry.push(scores[i]);
	} else if(scores[i] < 80){
		cArry.push(scores[i]);
	} else if(scores[i] < 90){
		bArry.push(scores[i]);
	} else { 
		aArry.push(scores[i]);
	}
}

// How many of each grade?
console.log(fArry.sort());
console.log(dArry.sort());
console.log(cArry.sort());
console.log(bArry.sort());
console.log(aArry.sort());
console.log("There are "+aArry.length+" A's");
console.log("There are "+bArry.length+" B's");
console.log("There are "+cArry.length+" C's");
console.log("There are "+dArry.length+" D's");
console.log("There are "+fArry.length+" F's");

//What is the lowest grade?
console.log("The lowest grade is " + fArry[0]);

//What is the highest grade?
console.log("The highest grade is " + aArry[aArry.length-1]);





