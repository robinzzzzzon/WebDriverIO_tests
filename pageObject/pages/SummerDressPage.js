import base_methods from '../../lib/base_methods'
import methods from '../../lib/base_methods'
import AbstractPage from '../AbstractPage'

class SummerDressPage extends AbstractPage {
	get sizeCbList() {
		return $$('#ul_layered_id_attribute_group_1 > li > div > span > input')
	}

	get colorList() {
		return $$('#ul_layered_id_attribute_group_3 > li > input')
	}

	get compositionList() {
		return $$('#ul_layered_id_feature_5 > li > div > span > input')
	}

	get styleList() {
		return $$('#ul_layered_id_feature_6 > li > div > span > input')
	}

	get propertyList() {
		return $$('#ul_layered_id_feature_7 > li > div > span > input')
	}

	get priceSlider() {
		return $('#layered_price_slider')
	}

	get infoList() {
		return $$('#informations_block_left_1 > div > ul > li > a')
	}

	get gridView() {
		return $('[title="Grid"]')
	}

	get listView() {
		return $('[title="List"]')
	}

	get itemsList() {
		return $$('.product-container')
	}

	get wishLinkList() {
		return $$('div.wishlist > a')
	}

	get wishFormClose() {
		return $('[title="Close"]')
	}

	get compareLinkList() {
		return $$('a.add_to_compare')
	}

	get addCompareBtn() {
		return $('.compare-form > button')
	}

	get addCompareBtnText() {
		return $('strong.total-compare-val')
	}

	get addToCartBtnList() {
		return $$('[title="Add to cart"]')
	}

	get moreBtnList() {
		return $$('[title="View"]')
	}

	get quickView() {
		return $$('a.quick-view')
	}

	get closeBtnOnViewForm() {
		return $('[title="Close"]')
	}

	open() {
		super.open('http://automationpractice.com/index.php?id_category=11&controller=category')
	}

	static checkViewPort(element) {
		if (!element.isDisplayedInViewport()) {
			methods.$scrollTo(element)
		}
	}

	selectAllSizeCb() {
		methods.$selectAllElements(this.sizeCbList)
		return this
	}

	selectAnySize(num) {
		methods.$selectAnyElement(this.sizeCbList, num)
		return this
	}

	selectAllColors() {
		methods.$selectAllElements(this.colorList)
		return this
	}

	selectAnyColor(num) {
		methods.$selectAnyElement(this.colorList, num)
		return this
	}

	selectAnyComposition(num) {
		methods.$selectAnyElement(this.compositionList, num)
		return this
	}

	selectAnyStyle(num) {
		methods.$selectAnyElement(this.styleList, num)
		return this
	}

	selectAllProperties() {
		methods.$selectAllElements(this.propertyList)
		return this
	}

	dragPrice(coordinate) {
		if (coordinate) {
			methods.$dragAndDrop(this.priceSlider.$('a:nth-child(1)'), coordinate)
			return this
		}
		methods.$dragAndDrop(this.priceSlider.$('a:nth-child(1)'), this.priceSlider.$('a:nth-child(2)'))
		return this
	}

	selectAnyInfo(num) {
		SummerDressPage.checkViewPort(this.infoList[num])
		methods.$click(this.infoList[num])
		return this
	}

	toGridView() {
		methods.$click(this.gridView)
		return this
	}

	toListView() {
		methods.$click(this.listView)
		return this
	}

	addAnyItemToCart(num) {
		SummerDressPage.checkViewPort(this.itemsList[num])
		methods.$getLocationAndMoveTo(this.itemsList[num])
		methods.$click(this.addToCartBtnList[num])
		return this
	}

	addAnyMoreItem(num) {
		SummerDressPage.checkViewPort(this.itemsList[num])
		methods.$getLocationAndMoveTo(this.itemsList[num])
		methods.$click(this.moreBtnList[num])
		return this
	}

	addAnyItemToWishList(num) {
		SummerDressPage.checkViewPort(this.itemsList[num])
		methods.$getLocationAndMoveTo(this.itemsList[num])
		methods.$selectAnyElement(this.wishLinkList, num)
		return this
	}

	closeForm() {
		methods.$click(this.wishFormClose)
		return this
	}

	toQuickView(num) {
		SummerDressPage.checkViewPort(this.itemsList[num])
		methods.$getLocationAndMoveTo(this.itemsList[num])
		methods.$click(this.quickView[num])
		return this
	}

	addAnyItemToCompare(num) {
		SummerDressPage.checkViewPort(this.itemsList[num])
		methods.$getLocationAndMoveTo(this.itemsList[num])
		methods.$selectAnyElement(this.compareLinkList, num)
		return this
	}

	compareBtnClick() {
		methods.$click(this.addCompareBtn)
		return this
	}
}

export default new SummerDressPage()
