import AbstractPage from '../AbstractPage'
import methods from '../../lib/base_methods'

class NavBar extends AbstractPage {
	get mainLogo() {
		return $('#header_logo > a')
	}

	get searchInput() {
		return $('#search_query_top')
	}

	get searchBtn() {
		return $('#searchbox > button')
	}

	get sectionsList() {
		return $$('#block_top_menu > ul > li > a')
	}

	get shopCart() {
		return $('[title="View my shopping cart"]')
	}

	get removeProductBtn() {
		return $('a#button_order_cart')
	}

	get checkOutBtn() {
		return $('.cart-buttons > a')
	}

	static checkViewPort(element) {
		if (!element.isDisplayedInViewport()) {
			methods.$scrollTo(element)
		}
	}

	mainLogoClick() {
		methods.$click(this.mainLogo)
		return this
	}

	setSearch(value = 'dress') {
		methods.$setValue(this.searchInput, value)
		return this
	}

	searchBtnClick() {
		methods.$click(this.searchBtn)
		return this
	}

	selectAnySection(num) {
		//const num = Math.floor(Math.random * this.sectionsList.length)
		methods.$selectAnyElement(this.sectionsList, num)
		return this
	}

	sectionWomenClick() {
		methods.$click(this.sectionsList[0])
	}

	sectionDressesClick() {
		methods.$click(this.sectionsList[1])
	}

	sectionTshirtsClick() {
		methods.$click(this.sectionsList[2])
	}

	navigateToCart() {
		NavBar.checkViewPort(this.shopCart)
		methods.$getLocationAndMoveTo(this.shopCart)
		return this
	}

	removeProductFromCart() {
		this.navigateToCart()
		methods.$click(this.removeProductBtn)
	}

	checkOutCart() {
		this.navigateToCart()
		methods.$click(this.checkOutBtn)
	}
}

export default new NavBar()
