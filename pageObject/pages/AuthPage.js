import methods from '../../lib/base_methods'
import data from '../../lib/helpers'
import AbstractPage from '../AbstractPage'

class AuthPage extends AbstractPage {
	open() {
		super.open('http://automationpractice.com/index.php?controller=authentication&back=my-account')
	}
	get emailCreateInput() {
		return $('#email_create')
	}

	get createAccBtn() {
		return $('#SubmitCreate')
	}

	get emailExistsInput() {
		return $('#email')
	}

	get passwordInput() {
		return $('#passwd')
	}

	get loginBtn() {
		return $('#SubmitLogin')
	}

	setNewEmail(value) {
		methods.$setValue(this.emailCreateInput, value)
		return this
	}

	createBtnClick() {
		methods.$click(this.createAccBtn)
		return this
	}

	setExistsEmail(value) {
		methods.$setValue(this.emailExistsInput, value)
		return this
	}

	setPassword(value) {
		methods.$setValue(this.passwordInput, value)
		return this
	}

	loginBtnClick() {
		methods.$click(this.loginBtn)
		return this
	}

	createAccount(newEmail = data.getRandomEmail()) {
		this.setNewEmail(newEmail)
		this.createBtnClick()
		return this
	}

	login(email = 'autoTrain@gmail.com', password = 'Qwerty123!') {
		this.setExistsEmail(email)
		this.setPassword(password)
		this.loginBtnClick()
		return this
	}
}

export default new AuthPage()
