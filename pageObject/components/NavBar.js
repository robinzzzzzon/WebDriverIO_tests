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
		return $$('#block_top_menu > ul > li')
	}

	get shopCart() {
		return $('[title="View my shopping cart"]')
	}

	get removeProductBtn() {
		return $("//a[contains(@class,'ajax_cart_block_remove_link')]")
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
		methods.$selectAnyElement(this.sectionsList, num)
		return this
	}

	sectionWomenClick() {
		methods.$click(this.sectionsList[0].$('a'))
		return this
	}

	sectionDressesClick() {
		methods.$click(this.sectionsList[1].$('a'))
		return this
	}

	sectionSummerDressesClick() {
		methods.$getLocationAndMoveTo(this.sectionsList[1])
		methods.$click(this.sectionsList[1].$('ul > li:nth-child(2) > a'))
		return this
	}

	sectionTshirtsClick() {
		methods.$click(this.sectionsList[2])
		return this
	}

	navigateToCart() {
		NavBar.checkViewPort(this.shopCart)
		methods.$getLocationAndMoveTo(this.shopCart)
		return this
	}

	removeProductFromCart() {
		this.navigateToCart()
		methods.$click(this.removeProductBtn)
		return this
	}

	checkOutCart() {
		this.navigateToCart()
		methods.$click(this.checkOutBtn)
		return this
	}
}

export default new NavBar()
