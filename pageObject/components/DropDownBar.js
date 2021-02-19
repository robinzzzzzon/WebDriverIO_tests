import methods from '../../lib/base_methods'
import AbstractPage from '../AbstractPage'

class DropDownBar extends AbstractPage {
	get womenTopsList() {
		return $$('li.sfHover > ul > li > a')
	}

	get womenDressesList() {
		return $$('li.sfHoverForce > ul > li > a')
	}

	chooseTopTypeFromList(num) {
		methods.$selectAnyElement(this.womenTopsList, num)
		return this
	}

	chooseDressTypeFromList(num) {
		methods.$selectAnyElement(this.womenDressesList, num)
		return this
	}
}

export default new DropDownBar()
