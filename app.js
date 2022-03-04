var gradient = 1
var gradients = [
	["linear-gradient(60deg, teal, purple) fixed", "purple"],
	["linear-gradient(60deg, darkslategrey, mediumseagreen) fixed", "darkslategrey"],
	["linear-gradient(60deg, coral, mediumvioletred) fixed", "mediumvioletred"],
	["linear-gradient(60deg, maroon, tomato) fixed", "maroon"]
]

var fuckYou = setInterval(function() {
	document.querySelector("#aaa").innerHTML += ("fuck you ")
}, 10)

document.querySelector("#scream").addEventListener("input", function() {
	clearInterval(fuckYou)

	document.querySelector("#aaa").innerHTML = ""
	setInterval(function() {
		document.querySelector("#aaa").innerHTML += (document.querySelector("#scream").value + " ")
	}, 10)
})

document.querySelector("#scream").addEventListener("click", function() {
	switch(gradient) {
		case 0:
			document.body.style.background = gradients[0][0]
			document.body.style.backgroundColor = gradients[0][1]
			gradient++
			break
		
		case 1:
			document.body.style.background = gradients[1][0]
			document.body.style.backgroundColor = gradients[1][1]
			gradient++
			break

		case 2:
			document.body.style.background = gradients[2][0]
			document.body.style.backgroundColor = gradients[2][1]
			gradient++
			break

		case 3:
			document.body.style.background = gradients[3][0]
			document.body.style.backgroundColor = gradients[3][1]
			gradient= 0
			break
	}
})