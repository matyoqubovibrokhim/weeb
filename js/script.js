'use strict'

let documentActions = e => {
	const targetElement = e.target
	if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('open-menu')
	}
}

document.addEventListener('click', documentActions)

const options = {
	root: null,
	rootMargin: '0px 0px 0px 0px',

	threshold: 0.2,
}
const callback = (entries, observer) => {
	entries.forEach(entry => {
		const currentElement = entry.target
		if (entry.isIntersecting) {
			currentElement.classList.add('--animate')
		} else {
			currentElement.classList.remove('--animate')
		}
	})
}
const observer = new IntersectionObserver(callback, options)

const animElements = document.querySelectorAll('[class*="--anim"]')
animElements.forEach(animElement => {
	observer.observe(animElement)
})
