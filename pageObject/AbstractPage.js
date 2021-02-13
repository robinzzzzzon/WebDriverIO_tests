export default class AbstractPage {
	open(path) {
		browser.url(path)
	}

	shortwait() {
		browser.pause(1000)
	}

	mediumwait() {
		browser.pause(3000)
	}

	longwait() {
		browser.pause(5000)
	}
}
