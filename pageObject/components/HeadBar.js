import AbstractPage from '../AbstractPage'
import methods from '../../lib/base_methods'

class HeadBar extends AbstractPage {
	get mainPhone() {
		return $('#contact-link > span')
	}

	get contactUs() {
		return $('#contact-link')
	}

	get signIn() {
		return $('.header_user_info')
	}

	get signOut() {
		return $('[title="Log me out"]')
	}

	get accountInfo() {
		return $('[title="View my customer account"] > span')
	}

	contactUsClick() {
		methods.$click(this.contactUs)
		return this
	}

	signInClick() {
		methods.$click(this.signIn)
		return this
	}

	signOutClick() {
		methods.$click(this.signOut)
		return this
	}
}

export default new HeadBar()
