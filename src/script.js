const abmpet = document.querySelector("#abm-pet")
const img = document.querySelector(".bust-img")
let canPet = true

abmpet.addEventListener("click", () => {
	if (!canPet) return
	canPet = false
	setTimeout(() => {
		canPet = true
	}, 500);
	let s = new Audio("src/squeak.mp3")
	s.play()
	img.animate([{scale: "1.1 0.9", easing: "cubic-bezier(.09,.68,.42,1.11)"}, {scale: "1 1"}], {duration: 300, iterations: 1})
})