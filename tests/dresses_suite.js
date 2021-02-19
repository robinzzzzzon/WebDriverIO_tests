import assertions from '../lib/assertions'
import SummerDressPage from '../pageObject/pages/SummerDressPage'

describe('accountPage test suites', () => {
	it('Should get history status from orderItem', () => {
		SummerDressPage.open()
		SummerDressPage.selectAllSizeCb()
		browser.pause(3000)
	})
})
