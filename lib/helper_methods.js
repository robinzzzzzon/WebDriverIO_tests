import * as data from './anyData'

const randomValueFromArray = array => {
	Array.prototype.rand = function () {
		return this[Math.floor(Math.random() * this.length + 1)]
	}
	return array.rand()
}

module.exports = {
	gerRandomAnyName(bool) {
		if (bool) {
			return randomValueFromArray(data.firstNameArray)
		}
		return randomValueFromArray(data.lastNameArray)
	},

	getDay() {
		return Math.floor(Math.random() * 10 + 1)
	},

	getMonth() {
		return randomValueFromArray(data.monthArray)
	},

	getYear() {
		const start = new Date(2005, 0, 1)
		const end = new Date(2018, 0, 1)
		let fullDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
		return fullDate.toDateString().substr(-4, 4)
	},

	getRandomCompany() {
		return randomValueFromArray(data.companyArray)
	},

	getRandomAddress() {
		return randomValueFromArray(data.addressArray)
	},

	getRandomCity() {
		return randomValueFromArray(data.cityArray)
	},

	getRandomID() {
		let randomNumber = Math.floor(Math.random() * 100 + 1)
		return `ID_${new Date().getTime().toString()}${randomNumber}`
	},

	getRandomPhoneNumber(bool) {
		if (bool) {
			return `${9}${Math.random().toString().slice(2, 11)}`
		}
		return `${0}${Math.random().toString().slice(2, 11)}`
	},

	getRandomEmail() {
		return `${new Date().getTime().toString()}${'@gmail.com'}`
	},
}
