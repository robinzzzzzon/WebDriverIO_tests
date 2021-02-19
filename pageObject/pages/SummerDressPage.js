import methods from '../../lib/base_methods'
import AbstractPage from '../AbstractPage'

class SummerDressPage extends AbstractPage {
	open() {
		super.open('http://automationpractice.com/index.php?id_category=11&controller=category')
	}
	get sizeCbList() {
		return $$('#ul_layered_id_attribute_group_1 > li > div > span > input')
	}

	selectAllSizeCb() {
		methods.$selectAllElements(this.sizeCbList)
		return this
	}
}

export default new SummerDressPage()
