var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

/*
  YOUR ASSIGNMENT
  ----------------------------------------
  Loop through all the reindeer in the array, and add the 
  name of the reindeer to the single HTML <div> element provided.
  The name of the reindeer should be prepended with the corresponding
  color from the other array.
  
  For example:
    Blue Dasher
    Red Dancer
    etc..
*/
console.log(hohohoElement);
for (var i =0; i < reindeer.length; i++) {
  console.log(colors[i],reindeer[i]);
  var theColorAtTime = colors[i].toLowerCase();
  hohohoElement.innerHTML += "<p style='color:"+theColorAtTime+"'>" + colors[i] + " " +reindeer[i]+ "</p> ";
  var thePTag = hohohoElement.childNodes[i];
  console.log(theColorAtTime);
}


