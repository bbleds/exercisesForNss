/*
  Create an `tree` function that accepts an integer
  as an argument. The function should create a pine
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.

  Example output with argument value of 5

            *
           ***
          *****
         *******
        *********

*/

// Create your function here. Make sure it takes the height argument.


// var tree = function(height) {
//   //make empty arrays
//    var initialArray = [];
//    var arrayToConcat = [];
//    var asteriskArray = [];
//    var addCount = 1;

// for(var c = 1; c <= height; c++){
//    for(var i = 0; i <= (height - c); i++){
//       initialArray.push(" ");
//       arrayToConcat.push(" ");
//    }
//       //    console.log("initialArray is", initialArray);
//       // console.log("arraytoConcat is", arrayToConcat);

//    for(var i = 0; i < addCount; i++){
//       asteriskArray.push("*");
//    }

//    //  console.log("The initialArray is ", initialArray);
//    //  console.log("The arrayToConcat is ", arrayToConcat);
//    // console.log("The asteriskArray is ", asteriskArray);

//    var joinedArray = initialArray.concat(asteriskArray.concat(arrayToConcat));
//    // console.log(joinedArray);

//    initialArray = [];
//    arrayToConcat = [];


//    console.log(joinedArray.join(""));
//        addCount += 1;
//   }
// }

// tree(5);


var treeSolution = function(height){

  var beginArray = [];
  var asteriskArray = [];
  for(var i = 0; i < height; i++){

        for(var s =1; s < height-i; s++){
          beginArray.push(" ");
        }

      var numAster = (i*2) +1;
      asteriskArray = [];
        for(var a = 0; a < numAster; a++){
          asteriskArray.push("*");
        }

      // console.log(beginArray);
      // console.log(numAster);
      // console.log(asteriskArray);

      var displayArray = beginArray.concat(asteriskArray, "");
      console.log(displayArray.join(""));

        var beginArray = [];

    }



}

treeSolution(100);





