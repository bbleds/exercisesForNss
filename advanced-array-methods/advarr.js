var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a div element in your HTML
var planetHolder = document.getElementById("planetName");

	planets.forEach(function(entry) {
	    planetHolder.innerHTML += "<p>"+entry+"</p>";
	});


// Use the map method to create a new array where the first letter of each planet is capitalized

var mappedPlanets = planets.map(function(thePlanet){
		var newPlanet = thePlanet.split("");
		console.log(newPlanet);

		var newLetter = newPlanet[0].toUpperCase();
		newPlanet.shift();
		newPlanet.unshift(newLetter);
		console.log(newPlanet);

		var finalPlanet = newPlanet.join("");
		console.log(finalPlanet);
		planetHolder.innerHTML += "<p style='font-weight: bold'>"+finalPlanet+"</p>";
	});


// Use the filter method to create a new array that contains planets with the letter 'e'
var EPlanets = [];
var filterdPlanets = planets.filter(function(planet){
			var doesItHaveE = false;
			console.log("The Planet is", planet);
			var planetArr = planet.split("");
			console.log(planetArr);
				planetArr.forEach(function(letter){
					if(letter.toLowerCase() === "e"){
						doesItHaveE = true;
					}
				});
			if (doesItHaveE===true){
				EPlanets.push(planet);
			}
		}); 

EPlanets.forEach(function(planet){
			planetHolder.innerHTML += "<p> A Planet with an e is: "+planet+"</p>";
});

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
