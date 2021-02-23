import methods from '../../lib/base_methods'
import AbstractPage from '../AbstractPage'

class ComparePage extends AbstractPage {
	open() {
		super.open('http://automationpractice.com/index.php?controller=products-comparison')
	}

	get compareHeader() {
		return $('.page-heading')
	}

	get removeItemsList() {
		return $$('.cmp_remove')
	}

	get addToCartList() {
		return $$('[title="Add to cart"]')
	}

	get viewItemList() {
		return $$('[title="View"]')
	}

	get continueShoppingBtn() {
		return $('.footer_link > li > a')
	}

	removeAllItems() {
		methods.$selectAllElements(this.removeItemsList)
		return this
	}

	removeAnyItem(num) {
		methods.$selectAnyElement(this.removeItemsList, num)
		return this
	}

	addAnyItemToCart(num) {
		methods.$selectAnyElement(this.addToCartList, num)
		return this
	}

	openAnyItemToView(num) {
		methods.$selectAnyElement(this.viewItemList, num)
		return this
	}

	continueBtnClick() {
		methods.$click(this.continueShoppingBtn)
		return this
	}
}

export default new ComparePage()
