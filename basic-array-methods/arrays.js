/*
  ...........YOUR MISSION...........

  Write JavaScript functions that perform the following tasks.

  1. document.write() the characters of any string in reverse order.
  2. document.write() the characters of any string in alphabetical order.
  3. document.write() true, or false, if the passed string is a palidrome.

  Note: document.write() is a fast way to put content into the DOM 
  without the need for a getElementById() and innerHTML.
*/


/*//  1. document.write() the characters of any string in reverse order. = Done
			function reversal(origString) {
				//put origString into array
				var arrryOfLetters = origString.split("");
				console.log(arrryOfLetters);

				//reverse array
				arrryOfLetters.reverse();
				console.log(arrryOfLetters);

				//join array
				var reversedText = arrryOfLetters.join("");
				console.log(reversedText);

				//output new joined string 
				document.write(reversedText);
			}


// 2. document.write() the characters of any string in alphabetical order.

			function alphabits(theString) {
				//split string into array
				var splitText = theString.split("");
				console.log("My split text is", splitText);


				//sort the array letters
				splitText.sort(function (a, b) {
    				return a.toLowerCase().localeCompare(b.toLowerCase());
				});
				console.log(splitText);

				//join
				var joinedStr = splitText.join("");
				console.log("Joined aplpha is", joinedStr);
				//output alphabetical
				document.write("<p>"+joinedStr+"</p>");
			}

//3. document.write() true, or false, if the passed string is a palidrome.

function palindrome() {

	//split string into two array
	//join first array into string

	//reverse second array
	//join second array into string

	//for loop for each letter in array1, comepare to item in array2 if they are the same, add to a counter, 
	//if counter === array.length, we have pallendrome
}

var testString = "This is my new string";
reversal(testString);
alphabits(testString);
palindrome(testString);*/


function (a, b){
	return a + b;
}





