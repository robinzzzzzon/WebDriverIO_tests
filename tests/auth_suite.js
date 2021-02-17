import assertions from '../lib/assertions'
import AuthPage from '../pageObject/pages/AuthPage'
import SignUpPage from '../pageObject/pages/SignUpPage'
import AccountPage from '../pageObject/pages/AccountPage'

describe('signUp test suites', () => {
	beforeEach(() => {
		AuthPage.open()
	})

	it('Should get signUpPage after enter new email', () => {
		AuthPage.createAccount()
		assertions.haveUrlContaining('#account-creation')
	})

	it('Should get AccountPage after enter the exist login/password', () => {
		AuthPage.login()
		assertions.haveUrlContaining('=my-account')
	})

	it('Should create new account', () => {
		AuthPage.createAccount()
		SignUpPage.fillSignUpForm()
		assertions.haveUrlContaining('my-account') &&
			assertions.$elContainingText(AccountPage.infoAccount, 'Welcome to your account.')
	})
})
