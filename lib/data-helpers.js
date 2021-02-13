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
		const lastNameArray = ['Travolta', 'Jackson', 'Werner', 'Sariola', 'Benedetti', 'Morgan', 'Stark', 'Spens', 'Marchetti', 'Grover', 'Wan-de-Beck']

		if (bool) {
			const firstName = randomValueFromArray(firstNameArray)
			return firstName
		}

		const lastName = randomValueFromArray(lastNameArray)
		return lastName
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

	getRandomInt(interval = 100) {
		return Math.floor(Math.random() * interval + 1)
	},
}
