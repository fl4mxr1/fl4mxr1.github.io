const scrolldownTip = document.querySelector("#scrolldown-tip")
const pastTheHdr = document.querySelector("#thisIsPastTheHeaderHideTheScrollTip")
const header = document.querySelector(".header")
const sw = document.querySelector(".site-wrapper")

setInterval(() => {
	var scrollTop = sw.scrollTop
	scrolldownTip.dataset.hidden = scrollTop > (header.clientHeight * 0.1)
}, 1)
