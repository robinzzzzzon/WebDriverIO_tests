import { desctop, tablet, mobile } from '../lib/devices'
export default class AbstractPage {
	open(path, deviceType = 1) {
		if (deviceType === 1) {
			browser.setWindowSize(...desctop)
		} else if (deviceType === 2) {
			browser.setWindowSize(...tablet)
		} else if (deviceType === 3) {
			browser.setWindowSize(...mobile)
		}
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
