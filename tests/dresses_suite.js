import assertions from '../lib/assertions'
import base_methods from '../lib/base_methods'
import AddCartForm from '../pageObject/components/AddCartForm'
import ComparePage from '../pageObject/pages/ComparePage'
import SummerDressPage from '../pageObject/pages/SummerDressPage'
import CartPage from '../pageObject/pages/CartPage'

describe('accountPage test suites', () => {
	it('Should can click quick view and add to cart this item', () => {
		SummerDressPage.open()
		SummerDressPage.toQuickView(1)
		SummerDressPage.closeForm()
		SummerDressPage.addAnyItemToCart(1)
		assertions.$elContainingText(AddCartForm.successHeader, 'Product successfully added')
		AddCartForm.cartBtnClick()
		assertions.$elHaveText(CartPage.countHeader, '1 Product')
	})
	it('Should can click quick view and can get more info about this item', () => {
		SummerDressPage.open()
		SummerDressPage.toQuickView(2)
		SummerDressPage.closeForm()
		SummerDressPage.addAnyMoreItem(2)
		assertions.haveUrlContaining('product')
	})
	it('Should set any checkbox and move to LinkInfo About Us', () => {
		SummerDressPage.open()
		SummerDressPage.selectAllSizeCb()
		SummerDressPage.selectAllColors()
		SummerDressPage.selectAnyComposition(1)
		SummerDressPage.selectAnyStyle(0)
		SummerDressPage.selectAllProperties()
		SummerDressPage.selectAnyInfo(3)
		assertions.$elHaveText($('div.rte > h1'), 'ABOUT US')
	})
	it('Should add two items to compare and after all remove them', () => {
		SummerDressPage.open()
		SummerDressPage.addAnyItemToCompare(0)
		base_methods.$waitUntilTextChange(SummerDressPage.addCompareBtnText, '1', 2500)
		SummerDressPage.addAnyItemToCompare(2)
		base_methods.$waitUntilTextChange(SummerDressPage.addCompareBtnText, '2', 2500)
		SummerDressPage.compareBtnClick()
		assertions.$elContainingText(ComparePage.compareHeader, 'Product Comparison')
		ComparePage.removeAllItems()
		ComparePage.continueBtnClick()
	})
	it('Should two items add to wishList', () => {
		SummerDressPage.open()
		SummerDressPage.addAnyItemToWishList(0)
		SummerDressPage.closeForm()
		base_methods.$waitUntilElIsClickable(SummerDressPage.itemsList[1], 2000)
		SummerDressPage.addAnyItemToWishList(1)
		SummerDressPage.closeForm()
	})
})
