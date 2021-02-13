import methods from '../../lib/base_methods'
import AbstractPage from '../AbstractPage'

class AddCardForm extends AbstractPage {
	get successHeader() {
		return $('.clearfix > div > h2')
	}

	get continueShoppingBtn() {
		return $('[title="Continue shopping"]')
	}

	get checkoutCartBtn() {
		return $('[title="Proceed to checkout"]')
	}

	get crossBtn() {
		return $('[title="Close window"]')
	}

	shoppingBtnClick() {
		methods.$click(this.continueShoppingBtn)
	}

	cartBtnClick() {
		methods.$click(this.checkoutCartBtn)
	}

	crossBtnClick() {
		methods.$click(this.crossBtn)
	}
}

export default new AddCardForm()
