import assertions from '../lib/assertions'
import base_methods from '../lib/base_methods'
import HeadBar from '../pageObject/components/HeadBar'
import AccountPage from '../pageObject/pages/AccountPage'
import AuthPage from '../pageObject/pages/AuthPage'
import allure from '@wdio/allure-reporter'

describe('accountPage test suites', () => {
	it('Should get history status from orderItem', () => {
		allure.addSeverity('Normal')
		AuthPage.open()
		AuthPage.logIn()
		assertions.$elContainingText(AccountPage.infoAccount, 'Welcome to your account.')
		AccountPage.historyClick()
		assertions.$elContainingText(AccountPage.itemStatus, 'On backorder')
		AccountPage.backToBtnClick()
	})

	it('Should get credit state & can delete personal address', () => {
		allure.addSeverity('Normal')
		AccountPage.open()
		AccountPage.creditClick()
		assertions.$elContainingText(AccountPage.creditHeader, 'You have not received any credit slips.')
		AccountPage.backToBtnClick().addressesClick().deleteAddressClick()
		base_methods.$handleAlert()
		AccountPage.backToBtnClick()
	})

	it('Should change & save new personal info', () => {
		allure.addSeverity('Normal')
		AccountPage.open()
		AccountPage.personalInfoClick()
		AccountPage.saveInfoBtnClick()
		assertions.$elBeVisible(AccountPage.infoError)
		AccountPage.setCurrentPswd()
		AccountPage.saveInfoBtnClick()
		assertions.$elContainingText(AccountPage.infoAlertSuccess, 'personal information has been successfully updated')
	})

	it('Should create & delete new wishList', () => {
		allure.addSeverity('Critical')
		AccountPage.open()
		AccountPage.wishListsClick()
		assertions.$elBeVisible(AccountPage.wishListHeader)
		AccountPage.setWishListName().saveWishList().deleteWishList()
		base_methods.$handleAlert(true)
		AccountPage.homeBtnClick()
		assertions.$elHaveText(HeadBar.accountInfo, 'Kris Delaver')
		HeadBar.signOutClick()
		assertions.$elBeVisible(HeadBar.signIn)
	})
})
