import methods from '../../lib/base_methods'
import AbstractPage from '../AbstractPage'

class MainPage extends AbstractPage {
	get shopNowBtn() {
		return $('button=Shop now !')
	}

	get prevBtn() {
		return $('.bx-prev')
	}

	get nextBtn() {
		return $('.bx-next')
	}

	get imgItems() {
		return $$('.htmlcontent_top > ul > li > a')
	}

	get tabsList() {
		return $$('#home-page-tabs > li > a')
	}

	get popularList() {
		return $$('#homefeatured > li > div > .left-block')
	}

	get popularButtonList() {
		return $$('#homefeatured > li > div > .right-block')
	}

	get bestList() {
		return $$('.blockbestsellers > li > div > .left-block')
	}

	get bestButtonList() {
		return $$('.blockbestsellers > li > div > .right-block')
	}

	open() {
		super.open('http://automationpractice.com/index.php')
	}

	static checkViewPort(element) {
		if (!element.isDisplayedInViewport()) {
			methods.$scrollTo(element)
		}
	}

	shopNowBtnClick() {
		methods.$click(this.shopNowBtn)
		return this
	}

	prevBtnClick() {
		methods.$click(this.prevBtn)
		return this
	}

	nextBtnClick() {
		methods.$click(this.nextBtn)
		return this
	}

	popularTabClick() {
		methods.$click(this.tabsList[0])
		return this
	}

	getPopularItem(num) {
		MainPage.checkViewPort(this.popularList[num])
		methods.$getLocationAndMoveTo(this.popularList[num])
		return this.popularList[num].$('h5 > a')
	}

	popularItemClick(num) {
		MainPage.checkViewPort(this.popularList[num])
		methods.$click(this.popularList[num].$('div > a'))
		return this
	}

	popularItemAddToCart(num) {
		MainPage.checkViewPort(this.popularList[num])
		methods.$getLocationAndMoveTo(this.popularList[num])
		methods.$selectAnyElement(this.popularButtonList, num, '.button-container > a:nth-child(1)')
		return this
	}

	popularItemMoreInfo(num) {
		MainPage.checkViewPort(this.popularList[num])
		methods.$getLocationAndMoveTo(this.popularList[num])
		methods.$click(this.popularButtonList[num].$('.button-container > a:nth-child(2)'))
		return this
	}

	bestTabClick() {
		methods.$click(this.tabsList[1])
		return this
	}

	getBestItem(num) {
		MainPage.checkViewPort(this.bestList[num])
		methods.$getLocationAndMoveTo(this.bestList[num])
		return this.bestList[num].$('h5 > a')
	}

	bestItemClick(num) {
		MainPage.checkViewPort(this.bestList[num])
		methods.$selectAnyElement(this.bestList, num, 'div > a')
		return this
	}

	bestItemAddToCart(num) {
		MainPage.checkViewPort(this.bestList[num])
		methods.$getLocationAndMoveTo(this.bestList[num])
		methods.$selectAnyElement(this.bestButtonList, num, '.button-container > a:nth-child(1)')
		return this
	}

	bestItemMoreInfo(num) {
		MainPage.checkViewPort(this.bestList[num])
		methods.$getLocationAndMoveTo(this.bestList[num])
		methods.$click(this.bestButtonList[num].$('.button-container > a:nth-child(2)'))
		return this
	}
}

export default new MainPage()
