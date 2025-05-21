'use strict'

let documentActions = e => {
	const targetElement = e.target
	if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('open-menu')
	}
}

document.addEventListener('click', documentActions)
