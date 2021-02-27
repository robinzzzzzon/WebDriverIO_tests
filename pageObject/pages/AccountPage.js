import methods from '../../lib/base_methods'
import AbstractPage from '../AbstractPage'

class AccountPage extends AbstractPage {
	get infoAccount() {
		return $('.info-account')
	}

	get historyLink() {
		return $('[title="Orders"]')
	}

	get creditLink() {
		return $('[title="Credit slips"]')
	}

	get addressesLink() {
		return $('[title="Addresses"]')
	}

	get personalInfoLink() {
		return $('[title="Information"]')
	}

	get wishListLink() {
		return $('[title="My wishlists"]')
	}

	get homeBtn() {
		return $("//span[contains(.,'Home')]")
	}

	get backToYourAccBtn() {
		return $("//span[contains(.,'Back to your account')]")
	}

	get historyHeader() {
		return $('h1="Order history"')
	}

	get itemStatus() {
		return $('.history_state span')
	}

	get creditHeader() {
		return $("//p[@class='alert alert-warning']")
	}

	get addressHeader() {
		return $('strong.dark')
	}

	get deleteAddress() {
		return $('[title="Delete"]')
	}

	get newAddressBtn() {
		return $('[title="Add an address"]')
	}

	get infoError() {
		return $("//li[contains(.,'The password you entered is incorrect.')]")
	}

	get infoAlertSuccess() {
		return $("//p[contains(@class,'alert alert-success')]")
	}

	get currentPswdInput() {
		return $('#old_passwd')
	}

	get saveInfoBtn() {
		return $('[name="submitIdentity"]')
	}

	get wishListHeader() {
		return $('h3.page-subheading')
	}

	get wishListInput() {
		return $('#name')
	}

	get submitwishListBtn() {
		return $('#submitWishlist')
	}

	get wishListDelete() {
		return $('td.wishlist_delete > a')
	}

	get wishListTable() {
		return $('#block-order-detail')
	}

	open() {
		super.open('http://automationpractice.com/index.php?controller=my-account')
	}

	historyClick() {
		methods.$click(this.historyLink)
		return this
	}

	creditClick() {
		methods.$click(this.creditLink)
		return this
	}

	addressesClick() {
		methods.$click(this.addressesLink)
		return this
	}

	deleteAddressClick() {
		methods.$click(this.deleteAddress)
		return this
	}

	personalInfoClick() {
		methods.$click(this.personalInfoLink)
		return this
	}

	wishListsClick() {
		methods.$click(this.wishListLink)
		return this
	}

	homeBtnClick() {
		methods.$click(this.homeBtn)
		return this
	}

	backToBtnClick() {
		methods.$click(this.backToYourAccBtn)
		return this
	}

	setCurrentPswd(password = 'Qwerty123!') {
		methods.$setValue(this.currentPswdInput, password)
		return this
	}

	saveInfoBtnClick() {
		methods.$click(this.saveInfoBtn)
		return this
	}

	setWishListName(name = 'AuotWishList №1') {
		methods.$setValue(this.wishListInput, name)
		return this
	}

	saveWishList() {
		methods.$click(this.submitwishListBtn)
		return this
	}

	deleteWishList() {
		methods.$click(this.wishListDelete)
		return this
	}
}

export default new AccountPage()
