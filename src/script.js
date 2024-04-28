const scrolldownTip = document.querySelector("#scrolldown-tip")
const pastTheHdr = document.querySelector("#thisIsPastTheHeaderHideTheScrollTip")
const codingLanguagesItems_TT = document.querySelector("#codinglanguagesitems_tooltip")
const abMeSec3 = document.querySelector(".am-sec3-grid")
const cltItems = abMeSec3.querySelectorAll(".item")
const sw = document.querySelector(".site-wrapper")
const header = document.querySelector(".header")

let selectedCLTItem = undefined

function updateSelectedCLTItem() {
	if (selectedCLTItem == undefined) {
		codingLanguagesItems_TT.dataset.hidden = true
		return
	}
	codingLanguagesItems_TT.dataset.hidden = false
	let boundingClient = selectedCLTItem.getBoundingClientRect()
	codingLanguagesItems_TT.style.top = `${boundingClient.top + (boundingClient.height / 2) + 20}px`
	codingLanguagesItems_TT.style.left = `${boundingClient.left + (boundingClient.width / 2) + 20}px`
}
setInterval(updateSelectedCLTItem, 1);
setInterval(() => {
	var scrollTop = sw.scrollTop
	scrolldownTip.dataset.hidden = scrollTop > (header.clientHeight * 0.1)
}, 1)

window.addEventListener('click', function(e){   
	let h = undefined
	cltItems.forEach(el => {
		if (el.contains(e.target)){
			console.log("hhhhhhhh")
			h = el
			aElement = el.getElementsByClassName("tooltip-wiki-link")[0]
			console.log(aElement)
		}
	})
	selectedCLTItem = h
	console.log(h)
})