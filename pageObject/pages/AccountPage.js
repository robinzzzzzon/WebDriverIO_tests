import methods from '../../lib/base_methods'
import AbstractPage from '../AbstractPage'

class AccountPage extends AbstractPage {
	open() {
		super.open('http://automationpractice.com/index.php?controller=my-account')
	}

	get infoAccount() {
		return $('.info-account')
	}
}

export default new AccountPage()
