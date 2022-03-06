$(() => {
	const interval = 1

	let gradient = 1
	const gradients = [
		["linear-gradient(60deg, teal, purple) fixed", "purple"],
		["linear-gradient(60deg, darkslategrey, mediumseagreen) fixed", "darkslategrey"],
		["linear-gradient(60deg, coral, mediumvioletred) fixed", "mediumvioletred"],
		["linear-gradient(60deg, maroon, tomato) fixed", "maroon"]
	]

	$("#container").draggable()

	const fuckYou = setInterval(() => {
		$("#aaa").append("fuck you ")
	}, interval)

	$(document).on("input", "#scream", () => {
		clearInterval(fuckYou)

		$("#aaa").html("")
		setInterval(() => {
			$("#aaa").append($("#scream").val() + " ")
		}, interval)
	})

	$(document).on("click", "#aaa", () => {
		document.body.style.background = gradients[gradient][0]
		document.body.style.backgroundColor = gradients[gradient][1]
		
		if(gradient !== 3) {
			gradient++
		} else {
			gradient = 0
		}
	})

	function saveAs(uri, filename) {
		let link = document.createElement('a')

		if (typeof link.download === 'string') {
			link.href = uri
			link.download = filename
			document.body.appendChild(link)
			link.click()
			document.body.removeChild(link)
		} else {
			window.open(uri)
		}
	}

	$(document).on("click", "#save", () => {
		$("#container").hide()

		html2canvas(document.body, {
			x: window.scrollX,
			y: window.scrollY,
			width: window.innerWidth,
			height: window.innerHeight,
		}).then(function(canvas) {
			saveAs(canvas.toDataURL(), "tell-them.png")
		})
	})
})