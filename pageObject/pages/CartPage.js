import methods from '../../lib/base_methods'
import AbstractPage from '../AbstractPage'

class CartPage extends AbstractPage {
	open() {
		super.open('http://automationpractice.com/index.php?controller=order')
	}

	get cartTitle() {
		return $('#cart_title')
	}

	get countHeader() {
		return $('.heading-counter > #summary_products_quantity')
	}

	get deleteItemBtnList() {
		return $$('a.cart_quantity_delete')
	}

	get emptyCartHeader() {
		return $('p=Your shopping cart is empty.')
	}

	get proceedToCheckBtn() {
		return $('[title="Proceed to checkout"]')
	}

	get continueShopingBtn() {
		return $('a=Continue shopping')
	}

	deleteAllItemsFromCart() {
		methods.$selectAllElements(this.deleteItemBtnList)
		return this
	}

	continueBtnClick() {
		methods.$click(this.continueShopingBtn)
		return this
	}

	proceedBtnClick() {
		methods.$click(this.proceedToCheckBtn)
		return this
	}
}

export default new CartPage()
