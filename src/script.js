const scrolldownTip = document.querySelector("#scrolldown-tip")
const pastTheHdr = document.querySelector("#thisIsPastTheHeaderHideTheScrollTip")
const codingLanguagesItems_TT = document.querySelector("#codinglanguagesitems_tooltip")
const abMeSec3 = document.querySelector(".am-sec3-grid")
const cltItems = abMeSec3.querySelectorAll(".item")

let selectedCLTItem = undefined

function updateSelectedCLTItem() {
	if (selectedCLTItem == undefined) {
		codingLanguagesItems_TT.dataset.hidden = true
		return
	}
	codingLanguagesItems_TT.dataset.hidden = false
	codingLanguagesItems_TT.style.top = `${selectedCLTItem.pageY}px`
	codingLanguagesItems_TT.style.left = `${selectedCLTItem.pageX}px`
}
updateSelectedCLTItem()

let io = new IntersectionObserver((h) => {
	scrolldownTip.dataset.hidden = h[0].isIntersecting
})
io.observe(pastTheHdr)

cltItems.forEach(el => {
	el.addEventListener("click", () => {
		selectedCLTItem = el
		updateSelectedCLTItem()
	})
});