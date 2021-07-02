document.getElementById("input").addEventListener("keydown", (e) => {
	if(e.key != "0" && e.key != "1" && e.key != "Backspace"){
		e.preventDefault();
	}
})

document.getElementById("input").addEventListener("keyup", (e) => {
	if(document.getElementById("input").value.length <= 0){
		document.getElementById("output").innerHTML = 0;
		return;
	}
	document.getElementById("output").innerHTML = parseInt(document.getElementById("input").value, 2)
})