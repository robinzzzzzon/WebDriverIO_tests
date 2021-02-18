import assertions from '../lib/assertions'
import base_methods from '../lib/base_methods'
import AccountPage from '../pageObject/pages/AccountPage'
import AuthPage from '../pageObject/pages/AuthPage'

describe('accountPage test suites', () => {
	it('Should get history status from orderItem', () => {
		AuthPage.open()
		AuthPage.logIn()
		assertions.$elContainingText(AccountPage.infoAccount, 'Welcome to your account.')
		AccountPage.historyClick()
		assertions.$elContainingText(AccountPage.itemStatus, 'On backorder')
		AccountPage.backToBtnClick()
	})

	it('Should get credit state & can delete personal address', () => {
		AccountPage.open()
		AccountPage.creditClick()
		assertions.$elContainingText(AccountPage.creditHeader, 'You have not received any credit slips.')
		AccountPage.backToBtnClick().addressesClick().deleteAddressClick()
		base_methods.$handleAlert()
		AccountPage.backToBtnClick()
	})

	it('Should create new account', () => {
		AccountPage.open()
		AccountPage.personalInfoClick()
		AccountPage.saveInfoBtnClick()
		assertions.$elBeVisible(AccountPage.infoError)
		AccountPage.setCurrentPswd()
		AccountPage.saveInfoBtnClick()
		assertions.$elContainingText(AccountPage.infoAlertSuccess, 'personal information has been successfully updated')
	})
})
