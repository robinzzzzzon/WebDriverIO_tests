import methods from '../../lib/base_methods'
import AbstractPage from '../AbstractPage'

class CartNavBar extends AbstractPage {
	get proceedToCheckBtn() {
		return $('[title="Proceed to checkout"]')
	}

	get continueShopingBtn() {
		return $('a=Continue shopping')
	}

	get wireLink() {
		return $('.bankwire')
	}

	get chequeLink() {
		return $('.cheque')
	}

	get otherMethodsLink() {
		return $('a=Other payment methods')
	}

	get confirmOrderBtn() {
		return $('[type="submit"]')
	}

	get backToOrdersLink() {
		return $('[title="Back to orders"]')
	}

	continueBtnClick() {
		methods.$click(this.continueShopingBtn)
		return this
	}

	proceedBtnClick() {
		methods.$click(this.proceedToCheckBtn)
		return this
	}

	wireLinkClick() {
		methods.$click(this.wireLink)
		return this
	}

	chequeLinkClick() {
		methods.$click(this.chequeLink)
		return this
	}

	otherMethodsClick() {
		methods.$click(this.otherMethodsLink)
		return this
	}

	confirmOrderClick() {
		methods.$click(this.confirmOrderBtn)
		return this
	}

	backToOrdersClick() {
		methods.$click(this.backToOrdersLink)
		return this
	}
}

export default new CartNavBar()
