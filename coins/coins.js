/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }

*/

var Quarter = {
	value: 25
}

var Dime  = {
	value: 10
}

var Nickel = {
	value: 5
}

var Penny = {
	value: 1
}

var coinValues = [25, 10, 5, 1];

function findTheCoinsBruh(theNumber) {

		var multi_number = theNumber * 100;
		console.log(multi_number);

  for (var i = 0; i < coinValues.length; i++){					
	    var numCoin = Math.floor(multi_number / coinValues[i]); 
	     
	    var amtCalc = numCoin * coinValues[i];

	    var amtLeftOver = multi_number - amtCalc; 

	    multi_number = amtLeftOver;

	    if (i === 0){
	    	console.log("The Number of Quarters is: ", numCoin);
	    } else if(i === 1){
	    	console.log("The Number of Dimes is: ", numCoin);
	    } else if(i === 2){
	    	console.log("The Number of Nickels is: ", numCoin);
	    } else if(i === 3){
	    	console.log("The Number of Pennies is: ", numCoin);
	    }
    }

}

findTheCoinsBruh(.74);
// function coinCounter () { // Initialize a JavaScript object to hold the coins var coinPurse = {};

// coinPurse.quarters = 0;

// return coinPurse; }

// var coins = coinCounter() console.log();







