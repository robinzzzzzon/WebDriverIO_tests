import NavBar from '../../pageObject/components/NavBar'
import CartNavBar from '../../pageObject/components/CartNavBar'
import AddCartForm from '../../pageObject/components/AddCartForm'
import MainPage from '../../pageObject/pages/MainPage'
import ProductPage from '../../pageObject/pages/ProductPage'
import CartPage from '../../pageObject/pages/CartPage'
import assertions from '../../lib/assertions'

describe('Test section of popular items', () => {
	beforeEach(() => {
		MainPage.open()
	})

	it('Should success add product to cart twice & delete from cart', () => {
		MainPage.popularItemAddToCart(1)
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		AddCartForm.crossBtnClick()
		MainPage.popularItemAddToCart(2)
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		AddCartForm.cartBtnClick()
		assertions.$elHaveText(CartPage.countHeader, '2 Products')
		CartPage.deleteAllItemsFromCart()
		CartPage.emptyCartHeader.waitForExist()
		assertions.$elHaveText(CartPage.emptyCartHeader, 'Your shopping cart is empty.')
	})

	it('Should success add product to cart & back to continue shopping', () => {
		MainPage.popularItemAddToCart(5)
		MainPage.shortwait()
		AddCartForm.cartBtnClick()
		assertions.$elHaveText(CartPage.countHeader, '1 Product')
		assertions.haveUrlContaining('controller=order')
		CartNavBar.continueBtnClick()
		assertions.haveUrl('http://automationpractice.com/index.php')
	})

	//to-do: Не удаляется элемент в появляющемся списке.
	it('Should success add product to cart & go to checkout cart', () => {
		MainPage.popularItemAddToCart(5)
		AddCartForm.shoppingBtnClick()
		NavBar.removeProductFromCart()
		assertions.$elBeExist($('span=(empty)'))
	})

	it('Should success get moreInfo about product & can add this product to cart out of ProductPage', () => {
		MainPage.popularItemMoreInfo(2)
		assertions.haveUrlContaining('product')
		ProductPage.cartBtnClick()
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		AddCartForm.shoppingBtnClick()
	})

	it('Should success get moreInfo about product & can add this product to cart out of ProductPage and checkout immediatelly', () => {
		MainPage.popularItemMoreInfo(4)
		assertions.haveUrlContaining('product')
		ProductPage.cartBtnClick()
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		AddCartForm.cartBtnClick()
		assertions.$elHaveText(CartPage.countHeader, '1 Product')
	})

	it('Should success add product to cart twice & delete from cart', () => {
		MainPage.bestTabClick()
		MainPage.bestItemAddToCart(2)
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		AddCartForm.crossBtnClick()
		MainPage.bestItemAddToCart(3)
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		AddCartForm.cartBtnClick()
		assertions.$elHaveText(CartPage.countHeader, '2 Products')
		CartPage.deleteAllItemsFromCart()
		CartPage.emptyCartHeader.waitForExist()
		assertions.$elHaveText(CartPage.emptyCartHeader, 'Your shopping cart is empty.')
	})

	it('Should success add product to cart & back to continue shopping', () => {
		MainPage.bestTabClick()
		MainPage.bestItemAddToCart(5)
		MainPage.shortwait()
		AddCartForm.cartBtnClick()
		assertions.$elHaveText(CartPage.countHeader, '1 Product')
		assertions.haveUrlContaining('controller=order')
		CartNavBar.continueBtnClick()
		assertions.haveUrl('http://automationpractice.com/index.php')
	})

	//to-do: Не удаляется элемент в появляющемся списке.
	it('Should success add product to cart & go to checkout cart', () => {
		MainPage.bestTabClick()
		MainPage.bestItemAddToCart(3)
		AddCartForm.shoppingBtnClick()
		NavBar.removeProductFromCart()
		assertions.$elBeExist($('span=(empty)'))
	})

	it('Should success get moreInfo about product & can add this product to cart out of ProductPage', () => {
		MainPage.bestTabClick()
		MainPage.bestItemMoreInfo(1)
		assertions.haveUrlContaining('product')
		ProductPage.cartBtnClick()
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		AddCartForm.shoppingBtnClick()
	})

	it('Should success get moreInfo about product & can add this product to cart out of ProductPage and checkout immediatelly', () => {
		MainPage.bestTabClick()
		MainPage.bestItemMoreInfo(4)
		assertions.haveUrlContaining('product')
		ProductPage.cartBtnClick()
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		AddCartForm.cartBtnClick()
		assertions.$elHaveText(CartPage.countHeader, '1 Product')
	})
})
