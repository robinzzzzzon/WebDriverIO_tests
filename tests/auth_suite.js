import assertions from '../lib/assertions'
import AuthPage from '../pageObject/pages/AuthPage'
import SignUpPage from '../pageObject/pages/SignUpPage'
import AccountPage from '../pageObject/pages/AccountPage'
import allure from '@wdio/allure-reporter'

describe('signUp test suites', () => {
	beforeEach(() => {
		AuthPage.open()
	})

	it('Should get signUpPage after enter new email', () => {
		allure.addSeverity('Normal')
		AuthPage.createAccount()
		assertions.haveUrlContaining('#account-creation')
	})

	it('Should get AccountPage after enter the exist login/password', () => {
		allure.addSeverity('Critical')
		AuthPage.logIn()
		assertions.haveUrlContaining('=my-account')
		AuthPage.logOut()
	})

	it('Should create new account', () => {
		allure.addSeverity('Blocker')
		AuthPage.createAccount()
		SignUpPage.fillSignUpForm()
		assertions.haveUrlContaining('my-account') &&
			assertions.$elContainingText(AccountPage.infoAccount, 'Welcome to your account.')
	})
})
