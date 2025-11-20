let attempts = 0

function login(){
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	// console.log(username);
	// console.log(password);

	let correct_username = "helen-akl";
	let correct_password = "lioneliscool"

	attempts = attempts + 1;

	if(username== correct_username && password == correct_password){
		document.getElementById("alert1").innerText = "you enterted the right password"
		document.getElementById("alert1").style.color = "green";
	} else if (attempts==3) {
		document.getElementById("alert1").innerText = "You ran out of attempts"
		document.getElementById("alert1").style.color = "red";
		document.getElementById("login").disabled=true
		
	}
	else {
		document.getElementById("alert1").innerText = "you are incorrect"
		document.getElementById("alert1").style.color = "gold";
	}

}