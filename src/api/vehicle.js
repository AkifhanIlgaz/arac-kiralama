class Vehicle {
	/**
	 * @param {string} img
	 * @param {string} brand
	 * @param {string} type
	 * @param {string} gear
	 * @param {string} fuel
	 * @param {number} hourPrice
	 * @param {number} dayPrice
	 * @param {number} usagePrice
	 * @param {number} year
	 * @param {number} minAge
	 * @param {number} minLicence
	 */
	constructor(img, brand, type, gear, fuel, hourPrice, dayPrice, usagePrice, year, minAge, minLicense) {
		this.img = img
		this.brand = brand
		this.type = type
		this.gear = gear
		this.fuel = fuel
		this.hourPrice = hourPrice
		this.dayPrice = dayPrice
		this.usagePrice = usagePrice
		this.brand = brand
		this.year = year
		this.minAge = minAge
		this.minLicense = minLicense
	}
}

export default Vehicle
