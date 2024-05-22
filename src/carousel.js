const carousels = document.querySelectorAll(".el-carousel")

Array.from(carousels).forEach((v, i) => {
	let carouselInner = v.querySelector(".el-carousel-inner")
	let carouselCards = carouselInner.querySelectorAll(".el-carousel-card")
	let carouselControls = v.querySelector(".el-carousel-controls")
	let carouselControlNext = carouselControls.querySelector(".el-carousel-control-n")
	let carouselControlPrev = carouselControls.querySelector(".el-carousel-control-p")
	var carouselIdx = 0
	let canSwitch = true

	function updateCardClasses() {
		let cur = carouselCards[carouselIdx]
		let nxt
		let prv
		if (carouselIdx + 1 > carouselCards.length - 1) nxt = carouselCards[0]; else nxt = carouselCards[carouselIdx + 1]
		if (carouselIdx - 1 < 0) prv = carouselCards[carouselCards.length - 1]; else prv = carouselCards[carouselIdx - 1]
		Array.from(carouselCards).forEach(v => {
			v.className = "el-carousel-card"
		})
		cur.classList.add("current")
		nxt.classList.add("next")
		prv.classList.add("prev")
	}
	updateCardClasses()

	carouselControlNext.addEventListener("click", () => {
		if (!canSwitch) return
		canSwitch = false
		if (carouselIdx >= carouselCards.length - 1) carouselIdx = 0; else carouselIdx++
		updateCardClasses()
		setTimeout(() => {
			canSwitch = true
		}, 800);
	})
	carouselControlPrev.addEventListener("click", () => {
		if (!canSwitch) return
		canSwitch = false
		if (carouselIdx <= 0) carouselIdx = carouselCards.length - 1; else carouselIdx--
		updateCardClasses()
		setTimeout(() => {
			canSwitch = true
		}, 800);
	})
})