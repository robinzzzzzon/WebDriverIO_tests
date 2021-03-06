import assertions from '../lib/assertions'
import base_methods from '../lib/base_methods'
import AddCartForm from '../pageObject/components/AddCartForm'
import ComparePage from '../pageObject/pages/ComparePage'
import SummerDressPage from '../pageObject/pages/SummerDressPage'
import CartPage from '../pageObject/pages/CartPage'
import { addSuccessText } from '../lib/anyData'
import allure from '@wdio/allure-reporter'

describe('accountPage test suites', () => {
	beforeEach(() => {
		SummerDressPage.open()
	})

	it('Should can click quick view and add to cart this item', () => {
		allure.addSeverity('Normal')
		SummerDressPage.toQuickView(1).closeForm().addAnyItemToCart(1)
		assertions.$elContainingText(AddCartForm.successHeader, addSuccessText)
		AddCartForm.cartBtnClick()
		assertions.$elHaveText(CartPage.countHeader, '1 Product')
	})

	it('Should can click quick view and can get more info about this item', () => {
		allure.addSeverity('Normal')
		SummerDressPage.toQuickView(2).closeForm().addAnyMoreItem(2)
		assertions.haveUrlContaining('product')
	})

	it('Should set any checkbox and move to LinkInfo About Us', () => {
		allure.addSeverity('Minor')
		SummerDressPage.selectAllSizeCb()
			.selectAllColors()
			.selectAnyComposition(1)
			.selectAnyStyle(0)
			.selectAllProperties()
			.selectAnyInfo(3)
		assertions.$elHaveText($('div.rte > h1'), 'ABOUT US')
	})

	it('Should add two items to compare and after all remove them', () => {
		allure.addSeverity('Critical')
		SummerDressPage.addAnyItemToCompare(0)
		base_methods.$waitUntilTextChange(SummerDressPage.addCompareBtnText, '1', 3500)
		SummerDressPage.addAnyItemToCompare(2)
		base_methods.$waitUntilTextChange(SummerDressPage.addCompareBtnText, '2', 3500)
		SummerDressPage.compareBtnClick()
		assertions.$elContainingText(ComparePage.compareHeader, 'Product Comparison')
		ComparePage.removeAllItems().continueBtnClick()
	})

	it('Should two items add to wishList', () => {
		allure.addSeverity('Normal')
		SummerDressPage.addAnyItemToWishList(0).closeForm()
		base_methods.$waitUntilElIsClickable(SummerDressPage.itemsList[1], 2500)
		SummerDressPage.addAnyItemToWishList(1).closeForm()
	})
})
