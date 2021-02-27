import methods from '../../lib/base_methods'
import helpers from '../../lib/helpers'
import AbstractPage from '../AbstractPage'

class SignUpPage extends AbstractPage {
	get mrRB() {
		return $('#uniform-id_gender1')
	}

	get mrsRB() {
		return $('#uniform-id_gender2')
	}

	get firstNameInput() {
		return $('#customer_firstname')
	}

	get lastNameInput() {
		return $('#customer_lastname')
	}

	get emailInput() {
		return $('#email')
	}

	get passwordInput() {
		return $('#passwd')
	}

	get daysDD() {
		return $('#uniform-days')
	}

	get monthsDD() {
		return $('#uniform-months')
	}

	get yearsDD() {
		return $('#uniform-years')
	}

	get companyInput() {
		return $('#company')
	}

	get address1Input() {
		return $('#address1')
	}

	get address2Input() {
		return $('#address2')
	}

	get cityInput() {
		return $('#city')
	}

	get stateDD() {
		return $('#uniform-id_state')
	}

	get postCodeInput() {
		return $('#postcode')
	}

	get otherInformationInput() {
		return $('#other')
	}

	get homePhoneInput() {
		return $('#phone')
	}

	get mobilePhoneInput() {
		return $('#phone_mobile')
	}

	get aliasInput() {
		return $('#alias')
	}

	get registerBtn() {
		return $('#submitAccount')
	}

	open() {
		super.open(`http://automationpractice.com/index.php?controller=authentication#account-creation`)
	}

	static checkViewPort(element) {
		if (!element.isDisplayedInViewport()) {
			methods.$scrollTo(element)
		}
	}

	mrRBClick() {
		methods.$click(this.mrRB)
		return this
	}

	mrsRBClick() {
		methods.$click(this.mrsRB)
		return this
	}

	setFirstName(fistName = helpers.gerRandomAnyName(true)) {
		methods.$setValue(this.firstNameInput, fistName)
		return this
	}

	setLastName(lastName = helpers.gerRandomAnyName()) {
		methods.$setValue(this.lastNameInput, lastName)
		return this
	}

	setEmail(eMail) {
		methods.$setValue(this.emailInput, eMail)
		return this
	}

	setPassword(password = 'Qwerty123!') {
		methods.$setValue(this.passwordInput, password)
		return this
	}

	selectDate() {
		methods.$click(this.daysDD)
		methods.$selectByIndex(this.daysDD, helpers.getDay())
		return this
	}

	selectMonth() {
		const index = Math.floor(Math.random() * 12 + 1)
		methods.$click(this.monthsDD)
		methods.$selectByIndex(this.monthsDD, index)
		return this
	}

	selectYear() {
		methods.$click(this.yearsDD)
		methods.$keys('ArrowDown', 3)
		methods.$keys('Enter')
		browser.pause(2000)
		return this
	}

	setCompany(company = helpers.getRandomCompany()) {
		methods.$setValue(this.companyInput, company)
	}

	setAddressOne(address = helpers.getRandomAddress()) {
		SignUpPage.checkViewPort(this.address1Input)
		methods.$setValue(this.address1Input, address)
		return this
	}

	setAddressTwo(address = helpers.getRandomAddress()) {
		SignUpPage.checkViewPort(this.address2Input)
		methods.$setValue(this.address2Input, address)
		return this
	}

	setCity(city = helpers.getRandomCity()) {
		SignUpPage.checkViewPort(this.cityInput)
		methods.$setValue(this.cityInput, city)
		return this
	}

	selectState() {
		SignUpPage.checkViewPort(this.stateDD)
		const index = Math.floor(Math.random() * 20 + 1)
		methods.$click(this.stateDD)
		methods.$selectByIndex(this.stateDD, index)
		return this
	}

	setPostCode(postCode = '12345') {
		SignUpPage.checkViewPort(this.postCodeInput)
		methods.$setValue(this.postCodeInput, postCode)
		return this
	}

	setOtherInfo(value = 'Any other info') {
		SignUpPage.checkViewPort(this.otherInformationInput)
		methods.$setValue(this.otherInformationInput, value)
		return this
	}

	setHomePhone(phone = helpers.getRandomPhoneNumber()) {
		SignUpPage.checkViewPort(this.homePhoneInput)
		methods.$setValue(this.homePhoneInput, phone)
		return this
	}

	setMobilePhone(phone = helpers.getRandomPhoneNumber()) {
		SignUpPage.checkViewPort(this.mobilePhoneInput)
		methods.$setValue(this.mobilePhoneInput, phone)
		return this
	}

	setAlias(value) {
		SignUpPage.checkViewPort(this.aliasInput)
		methods.$setValue(this.aliasInput, value)
		return this
	}

	registerBtnClick() {
		SignUpPage.checkViewPort(this.registerBtn)
		methods.$click(this.registerBtn)
		return this
	}

	fillSignUpForm() {
		this.mrRBClick()
		this.setFirstName()
		this.setLastName()
		this.setPassword()
		this.selectDate()
		this.selectMonth()
		this.selectYear()
		this.setCompany()
		this.setAddressOne()
		this.setAddressTwo()
		this.setCity()
		this.selectState()
		this.setPostCode()
		this.setOtherInfo()
		this.setHomePhone()
		this.setMobilePhone()
		this.registerBtnClick()
	}
}

export default new SignUpPage()
