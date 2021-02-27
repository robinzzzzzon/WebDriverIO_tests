import NavBar from '../pageObject/components/NavBar'
import CartNavBar from '../pageObject/components/CartNavBar'
import AddCartForm from '../pageObject/components/AddCartForm'
import MainPage from '../pageObject/pages/MainPage'
import ProductPage from '../pageObject/pages/ProductPage'
import CartPage from '../pageObject/pages/CartPage'
import assertions from '../lib/assertions'
import allure from '@wdio/allure-reporter'
import base_methods from '../lib/base_methods'

describe('Test section of popular items', () => {
	beforeEach(() => {
		MainPage.open()
	})

	it('Should success add product to cart twice & delete from cart', () => {
		allure.addSeverity('Critical')
		MainPage.bestTabClick().bestItemAddToCart(2)
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		AddCartForm.crossBtnClick()
		MainPage.bestItemAddToCart(3)
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		base_methods.$waitUntilElIsClickable(AddCartForm.checkoutCartBtn, 3000)
		AddCartForm.cartBtnClick()
		assertions.$elHaveText(CartPage.countHeader, '2 Products')
		CartPage.deleteAllItemsFromCart()
		CartPage.emptyCartHeader.waitForExist()
		assertions.$elHaveText(CartPage.emptyCartHeader, 'Your shopping cart is empty.')
	})

	it('Should success add product to cart & back to continue shopping', () => {
		allure.addSeverity('Critical')
		MainPage.bestTabClick().bestItemAddToCart(5)
		base_methods.$waitUntilElIsClickable(AddCartForm.checkoutCartBtn, 3000)
		AddCartForm.cartBtnClick()
		assertions.$elHaveText(CartPage.countHeader, '1 Product')
		assertions.haveUrlContaining('controller=order')
		CartNavBar.continueBtnClick()
		assertions.haveUrl('http://automationpractice.com/index.php')
	})

	it('Should success add product to cart & go to checkout cart', () => {
		allure.addSeverity('Minor')
		MainPage.bestTabClick().bestItemAddToCart(3)
		AddCartForm.shoppingBtnClick()
		NavBar.removeProductFromCart()
		assertions.$elBeExist($('span=(empty)'))
	})

	it('Should success get moreInfo about product & can add this product to cart out of ProductPage', () => {
		allure.addSeverity('Blocker')
		MainPage.bestTabClick().bestItemMoreInfo(1)
		assertions.haveUrlContaining('product')
		ProductPage.cartBtnClick()
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		AddCartForm.shoppingBtnClick()
	})

	it('Should success get moreInfo about product & can add this product to cart out of ProductPage and checkout immediatelly', () => {
		allure.addSeverity('Normal')
		MainPage.bestTabClick().bestItemMoreInfo(4)
		assertions.haveUrlContaining('product')
		ProductPage.cartBtnClick()
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		AddCartForm.cartBtnClick()
		CartPage.deleteAllItemsFromCart()
		CartPage.emptyCartHeader.waitForExist()
		assertions.$elHaveText(CartPage.emptyCartHeader, 'Your shopping cart is empty.')
	})
})
