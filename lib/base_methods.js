module.exports = {
	$scrollTo(element) {
		element.scrollIntoView()
		return this
	},

	$getLocationAndMoveTo(element) {
		try {
			element.waitForExist()
			const location = element.getLocation()
			element.moveTo({ ...location })
			return this
		} catch (error) {
			throw new Error(`Couldn't get location to ${element}`)
		}
	},

	$click(element) {
		try {
			element.waitForExist()
			element.waitForDisplayed()
			element.click()
			return this
		} catch (error) {
			throw new Error(`Couldn't click on ${element}`)
		}
	},

	$doubleClick(element) {
		try {
			element.waitForExist()
			element.doubleClick()
			return this
		} catch (error) {
			throw new Error(`Couldn't double click on ${element}`)
		}
	},

	$setValue(element, value) {
		try {
			element.waitForExist()
			element.setValue(value)
			return this
		} catch (error) {
			throw new Error(`Couldn't set value for ${element}`)
		}
	},

	$selectByAttribute(element, attr, value) {
		try {
			element.waitForDisplayed()
			element.selectByAttribute(attr, value)
			return this
		} catch (error) {
			throw new Error(`Couldn't select ${element} by attribute`)
		}
	},

	$selectByVisibleText(element, value) {
		try {
			element.waitForExist()
			element.selectByVisibleText(value)
			return this
		} catch (error) {
			throw new Error(`Couldn't select ${element} by text`)
		}
	},

	$selectByIndex(elements, index) {
		elements.waitForDisplayed()
		elements.selectByIndex(index)
		return this
	},

	$selectAnyElement(list, number, $elType) {
		try {
			list.forEach((el, index) => {
				el.waitForExist()
				if (index === number) {
					if ($elType) {
						el.$($elType).click()
						return
					}
					el.click()
				}
			})
			return this
		} catch (error) {
			throw new Error(`Couldn't click on element from list`)
		}
	},

	$selectAllElements(list) {
		try {
			list.forEach(el => {
				el.waitForExist()
				el.click()
			})
			return this
		} catch (error) {
			throw new Error(`Couldn't click on elements from list`)
		}
	},

	$getText(element) {
		try {
			element.waitForExist()
			return element.getText()
		} catch (error) {
			throw new Error(`Couldn't get text from ${element}`)
		}
	},

	$clearValue(element) {
		try {
			element.waitForExist()
			element.clearValue()
			return this
		} catch (error) {
			throw new Error(`Couldn't clear value of ${element}`)
		}
	},

	$keys(keyName, count) {
		if (!count) {
			browser.keys(keyName)
			return this
		}
		for (let i = 0; i < count; i++) {
			browser.keys(keyName)
		}
		return this
	},
}
