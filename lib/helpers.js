const randomValueFromArray = array => {
	Array.prototype.rand = function () {
		return this[Math.floor(Math.random() * this.length + 1)]
	}
	return array.rand()
}

module.exports = {
	gerRandomAnyName(bool) {
		//prettier-ignore
		const firstNameArray = ['Paul', 'Zack', 'Viktor', 'Rudy', 'Helena', 'Maria', 'Serge', 'Alex', 'Aleksander', 'John', 'Pit', 'Jess', 'Lana', 'Mick', 'Valentino', 'Giovanni', 'Mateo']
		//prettier-ignore
		const lastNameArray =  ['Travolta', 'Jackson', 'Werner', 'Sariola', 'Benedetti', 'Morgan', 'Stark', 'Spens', 'Marchetti', 'Grover', 'Wan-de-Beck']

		if (bool) {
			return randomValueFromArray(firstNameArray)
		}
		return randomValueFromArray(lastNameArray)
	},

	getDay() {
		return Math.floor(Math.random() * 10 + 1)
	},

	getMonth() {
		//prettier-ignore
		const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		return randomValueFromArray(monthArray)
	},

	getYear() {
		const start = new Date(2005, 0, 1)
		const end = new Date(2018, 0, 1)
		let fullDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
		return fullDate.toDateString().substr(-4, 4)
	},

	getRandomCompany() {
		//prettier-ignore
		const companyArray = ['Walmart','Amazon','Exxon Mobil','Apple','CVS Health','Berkshire Hathaway','UnitedHealth Group','McKesson','AT&T','AmerisourceBergen']
		return randomValueFromArray(companyArray)
	},

	getRandomAddress() {
		const addressArray = [
			'93 NW. Coffee Street Bolingbrook',
			'90 Taylor Street Fort Worth',
			'7300 Roberts Lane Clarksville',
			'68 Homewood St.North Andover',
			'5 Columbia St.Bonita Springs',
			'7905 Old York St.Abingdon',
			'8912 North Heritage St.Hollis',
			'977 West Country Club St.Neenah',
			'7417 Snake Hill St.Carpentersville',
			'626 Yukon Street Leominster',
		]
		return randomValueFromArray(addressArray)
	},

	getRandomCity() {
		//prettier-ignore
		const cityArray = ['Chicago', 'New Orleans', 'Nashville', 'Los Angeles', 'New York', 'Las Vegas', 'St. Louis', 'Washington', 'Miami', 'Boston']
		return randomValueFromArray(cityArray)
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
