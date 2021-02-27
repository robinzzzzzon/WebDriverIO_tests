import NavBar from '../pageObject/components/NavBar'
import CartNavBar from '../pageObject/components/CartNavBar'
import AddCartForm from '../pageObject/components/AddCartForm'
import MainPage from '../pageObject/pages/MainPage'
import ProductPage from '../pageObject/pages/ProductPage'
import CartPage from '../pageObject/pages/CartPage'
import assertions from '../lib/assertions'
import base_methods from '../lib/base_methods'
import { addSuccessText, emptyCartText, mainPageUrl } from '../lib/assertData'
import allure from '@wdio/allure-reporter'

describe('Test section of popular items', () => {
	beforeEach(() => {
		MainPage.open()
	})

	it('Should success add product to cart twice & delete from cart', function () {
		this.retries(1)
		allure.addSeverity('Critical')
		MainPage.bestTabClick().bestItemAddToCart(2)
		assertions.$elContainingText(AddCartForm.successHeader, addSuccessText)
		AddCartForm.crossBtnClick()
		MainPage.bestItemAddToCart(3)
		assertions.$elContainingText(AddCartForm.successHeader, addSuccessText)
		base_methods.$waitUntilElIsClickable(AddCartForm.checkoutCartBtn, 3000)
		AddCartForm.cartBtnClick()
		assertions.$elHaveText(CartPage.countHeader, '2 Products')
		CartPage.deleteAllItemsFromCart()
		CartPage.emptyCartHeader.waitForExist()
		assertions.$elHaveText(CartPage.emptyCartHeader, emptyCartText)
	})

	it('Should success add product to cart & back to continue shopping', () => {
		allure.addSeverity('Critical')
		MainPage.bestTabClick().bestItemAddToCart(5)
		base_methods.$waitUntilElIsClickable(AddCartForm.checkoutCartBtn, 3000)
		AddCartForm.cartBtnClick()
		assertions.$elHaveText(CartPage.countHeader, '1 Product')
		assertions.haveUrlContaining('controller=order')
		CartNavBar.continueBtnClick()
		assertions.haveUrl(mainPageUrl)
	})

	it('Should success add product to cart & go to checkout cart', () => {
		allure.addSeverity('Minor')
		MainPage.bestTabClick().bestItemAddToCart(3)
		AddCartForm.shoppingBtnClick()
		NavBar.removeProductFromCart()
		assertions.$elBeExist($('span=(empty)'))
	})

	it('Should get moreInfo about product & can add this product to cart', () => {
		allure.addSeverity('Blocker')
		MainPage.bestTabClick().bestItemMoreInfo(1)
		assertions.haveUrlContaining('product')
		ProductPage.cartBtnClick()
		assertions.$elContainingText(AddCartForm.successHeader, addSuccessText)
		AddCartForm.shoppingBtnClick()
	})

	it('Should get moreInfo about product & can add this product to cart and checkout immediatelly', () => {
		allure.addSeverity('Normal')
		MainPage.bestTabClick().bestItemMoreInfo(4)
		assertions.haveUrlContaining('product')
		ProductPage.cartBtnClick()
		assertions.$elContainingText(AddCartForm.successHeader, addSuccessText)
		AddCartForm.cartBtnClick()
		CartPage.deleteAllItemsFromCart()
		CartPage.emptyCartHeader.waitForExist()
		assertions.$elHaveText(CartPage.emptyCartHeader, emptyCartText)
	})
})
