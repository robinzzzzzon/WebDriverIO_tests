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

	get agreeCb() {
		return $('#cgv')
	}

	get completeHeader() {
		return $('strong="Your order on My Store is complete."')
	}

	deleteAllItemsFromCart() {
		methods.$selectAllElements(this.deleteItemBtnList)
		return this
	}

	agreeCbClick() {
		methods.$click(this.agreeCb)
	}
}

export default new CartPage()
