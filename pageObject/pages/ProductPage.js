import methods from '../../lib/base_methods'
import AbstractPage from '../AbstractPage'

class ProductPage extends AbstractPage {
	get countUpBtn() {
		return $('.product_quantity_up')
	}

	get addToCartBtn() {
		return $('span=Add to cart')
	}

	get colorList() {
		return $$('.color_to_pick_list > li')
	}

	open(id) {
		super.open(`http://automationpractice.com/index.php?id_product=${id}&controller=product`)
	}

	countUpClick() {
		methods.$click(this.countUpBtn)
		return this
	}

	cartBtnClick() {
		methods.$click(this.addToCartBtn)
		return this
	}
}

export default new ProductPage()
