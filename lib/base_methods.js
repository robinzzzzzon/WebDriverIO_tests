module.exports = {
	$scrollTo(element) {
		element.scrollIntoView()
	},

	$getLocationAndMoveTo(element) {
		try {
			element.waitForExist()
			const location = element.getLocation()
			element.moveTo({ ...location })
		} catch (error) {
			throw new Error(`Couldn't get location to ${element}`)
		}
	},

	$waitUntilTextChange(el, text, timeout) {
		browser.waitUntil(
			() => {
				return el.getText() === text
			},
			{ timeout, timeoutMsg: `expected text to be different after ${timeout}ms` }
		)
	},

	$waitUntilElIsClickable(el, timeout) {
		browser.waitUntil(() => {
			return el.isClickable()
		}, timeout)
	},

	$dragAndDrop(element, target, targetCoordinate) {
		try {
			element.waitForExist()
			if (target !== undefined) {
				element.dragAndDrop(target)
			}
			element.dragAndDrop({ ...targetCoordinate })
		} catch (error) {
			throw new Error(`Couldn't drag ${element} to ${target}`)
		}
	},

	$click(element) {
		try {
			element.waitForExist()
			element.waitForDisplayed()
			element.click()
		} catch (error) {
			throw new Error(`Couldn't click on ${element}`)
		}
	},

	$doubleClick(element) {
		try {
			element.waitForExist()
			element.doubleClick()
		} catch (error) {
			throw new Error(`Couldn't double click on ${element}`)
		}
	},

	$setValue(element, value) {
		try {
			element.waitForExist()
			element.setValue(value)
		} catch (error) {
			throw new Error(`Couldn't set value for ${element}`)
		}
	},

	$selectByAttribute(element, attr, value) {
		try {
			element.waitForDisplayed()
			element.selectByAttribute(attr, value)
		} catch (error) {
			throw new Error(`Couldn't select ${element} by attribute`)
		}
	},

	$selectByVisibleText(element, value) {
		try {
			element.waitForExist()
			element.selectByVisibleText(value)
		} catch (error) {
			throw new Error(`Couldn't select ${element} by text`)
		}
	},

	$selectByIndex(elements, index) {
		elements.waitForDisplayed()
		elements.selectByIndex(index)
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
					return
				}
			})
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
		} catch (error) {
			throw new Error(`Couldn't click on element from list`)
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
		} catch (error) {
			throw new Error(`Couldn't clear value of ${element}`)
		}
	},

	$keys(keyName, count) {
		if (!count) {
			browser.keys(keyName)
		}
		for (let i = 0; i < count; i++) {
			browser.keys(keyName)
		}
	},

	$handleAlert(bool) {
		if (bool) {
			browser.acceptAlert()
		}
		browser.dismissAlert()
	},
}
