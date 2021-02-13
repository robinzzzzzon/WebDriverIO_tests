module.exports = {
	haveUrl(value) {
		expect(browser).toHaveUrl(value)
	},

	haveUrlContaining(value) {
		expect(browser).toHaveUrlContaining(value)
	},

	haveTitle(value) {
		expect(browser).toHaveTitle(value, { containing: true })
	},

	$elBeExist($el) {
		expect($el).toExist()
	},

	$elBeVisible($el, timeout = 2000) {
		expect($el).toBeVisible({ wait: timeout })
	},

	$elHaveText($el, exampleText) {
		expect($el).toHaveText(exampleText)
	},

	$elContainingText($el, exampleText) {
		expect($el).toHaveTextContaining(exampleText, { ignoreCase: true })
	},

	$elHaveClass($el, className) {
		expect($el).toHaveElementClass(className)
	},

	$elHaveAttribute($el, attr, value) {
		expect($el).toHaveAttribute(attr, value)
	},

	$elContainingValue($el, value) {
		expect($el).toHaveValueContaining(value)
	},

	$elHaveValue($el, value) {
		expect($el).toHaveValue(value)
	},

	$elHaveProperty($el, property, value, bool) {
		if (bool) {
			expect($el).toHaveElementProperty(property, value)
		}
		expect($el).not.toHaveElementProperty(property, value)
	},

	toHaveChildren($el, cnt) {
		expect($el).toHaveChildren(cnt)
	},
}
