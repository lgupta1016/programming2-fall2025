 function makeStory() {
     const noun1 = document.getElementById("noun1").value;
			const verb1 = document.getElementById("verb1").value;
			const adjective1 = document.getElementById("adjective1").value;
			const color = document.getElementById("color").value;
			const animal = document.getElementById("animal").value;
			const food = document.getElementById("food").value;
			const place = document.getElementById("place").value;
			const verb2 = document.getElementById("verb2").value;
			const adjective2 = document.getElementById("adjective2").value;
			const number = document.getElementById("number").value;

			const story = "One " + adjective1 + " day, I found a " + color + " " + noun1 + 
				" at the " + place + ". I decided to " + verb1 + " with it while a " + 
				adjective2 + " " + animal + " watched from nearby. After eating " + 
				number + " servings of delicious " + food + ", we all started to " + 
				verb2 + " together. It was the best day ever!";
    document.getElementById("storyOutput").textContent = story;
}