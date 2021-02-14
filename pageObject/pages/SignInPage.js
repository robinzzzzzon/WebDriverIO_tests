import methods from '../../lib/base_methods'
import AbstractPage from '../AbstractPage'

//autoTrain@gmail.com / Qwerty123! готовый профиль
class SignInPage extends AbstractPage {
	open() {
		super.open(`http://automationpractice.com/index.php?controller=authentication#account-creation`)
	}

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
		return $('#days')
	}

	get daysList() {
		return $$('#days > option')
	}

	get monthsDD() {
		return $('#months')
	}

	get monthsList() {
		return $$('#months > option')
	}

	get yearsDD() {
		return $('#years')
	}

	get yearsList() {
		return $$('#years > option')
	}

	get newsLetterCB() {
		return $('#newsletter')
	}

	get offersCB() {
		return $('#optin')
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
		return $('#id_state')
	}

	get stateList() {
		return $$('#id_state > option')
	}

	get postCodeInput() {
		return $('#postcode')
	}

	get countryDD() {
		return $('#id_country')
	}

	get countryList() {
		return $$('#id_country > option')
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

	mrRBClick() {
		methods.$click(this.mrRB)
		return this
	}

	mrsRBClick() {
		methods.$click(this.mrsRB)
		return this
	}

	setFirstName(value) {
		methods.$setValue(this.firstNameInput, value)
		return this
	}

	setLastName(value) {
		methods.$setValue(this.lastNameInput, value)
		return this
	}

	setEmail(value) {
		methods.$setValue(this.emailInput, value)
		return this
	}

	setPassword(value) {
		methods.$setValue(this.passwordInput, value)
		return this
	}

	selectDate(value) {
		methods.$click(this.daysDD)
		methods.$selectAnyElement(this.daysList, value)
		return this
	}

	selectMonth(value) {
		methods.$click(this.monthsDD)
		methods.$selectAnyElement(this.monthsList, value)
		return this
	}

	selectYear(value) {
		methods.$click(this.yearsDD)
		methods.$selectAnyElement(this.yearsList, value)
		return this
	}

	letterCBClick() {
		methods.$click(this.newsLetterCB)
		return this
	}

	offerCBClick() {
		methods.$click(this.offersCB)
		return this
	}

	setAddressOne(value) {
		methods.$setValue(this.address1Input, value)
		return this
	}

	setAddressTwo(value) {
		methods.$setValue(this.address2Input, value)
		return this
	}

	setCity(value) {
		methods.$setValue(this.cityInput, value)
		return this
	}

	setState(value) {
		methods.$click(this.stateDD)
		methods.$selectAnyElement(this.stateList, value)
		return this
	}

	setPostCode(value) {
		methods.$setValue(this.postCodeInput, value)
		return this
	}

	setCountry(value) {
		methods.$click(this.countryDD)
		methods.$selectAnyElement(this.countryList, value)
		return this
	}

	setOtherInfo(value) {
		methods.$setValue(this.otherInformationInput, value)
		return this
	}

	setHomePhone(value) {
		methods.$setValue(this.homePhoneInput, value)
		return this
	}

	setMobilePhone(value) {
		methods.$setValue(this.mobilePhoneInput, value)
		return this
	}

	setAlias(value) {
		methods.$setValue(this.aliasInput, value)
		return this
	}

	registerBtnClick() {
		methods.$click(this.registerBtn)
		return this
	}

	//to-do: собирательный метод fillRegisterForm() и продолжить тесты с заведением новой учетки и без(существующая учетка)
}

export default new SignInPage()
