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

	if(localStorage.getItem("tips") === null) {
		$("#dialog").append(`
			<ul>
				<li>tap the background to change the gradient.</li>
				<li>type your message in the text box.</li>
				<li>tap "save" to download the wallpaper.</li>
				<li>you can drag the "pill" wherever you want.</li>
			</ul>
			<p style="font-size: 12px;"> 
				tell them 1.0<br>
				cibigi.github.io/tell-them<br>
				by Christian Battista Giannarelli<br>
				Released under GNU GPL v3.
			</p>
		`)

		$("#dialog").dialog({
			show: {
				effect: "explode",
				duration: 500
			},
			hide: {
				effect: "explode",
				duration: 500
			}
		})

		localStorage.setItem("tips", "ok")
	}

	$(document).on("click", "#scream", () => {
		$("#scream").trigger("focus")
	})

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
		
		if(gradient < 3) {
			gradient++
		} else {
			gradient = 0
		}
	})

	function saveAs(uri, filename) {
		let link = document.createElement("a")

		if (typeof link.download === "string") {
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

		$("body").css("overflow", "visible")
		$("body").width(screen.width)
		$("body").height(screen.height)

		$(document).off("click", "#aaa")
		window.scrollTo(0, 0)

		html2canvas(document.body, {
			x: window.scrollX,
			y: window.scrollY,
			width: screen.width,
			height: screen.height,
		}).then(function(canvas) {
			saveAs(canvas.toDataURL(), "tell-them.png")
		}).delay(1000)
	})
})