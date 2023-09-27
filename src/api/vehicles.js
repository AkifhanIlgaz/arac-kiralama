import Vehicle from './vehicle'

const filterByStringKeys = ['brand', 'fuel', 'gear']
const filterByNumberKeys = ['minAge', 'minLicense']
const sortKeys = ['hourPrice', 'dayPrice', 'kmPrice']

const mockVehicles = [new Vehicle('https://s3.eu-west-1.amazonaws.com/files.driveyoyo.com/yoyoircom/media/files/23000/84/2023/8/20230804100527937-50959-23-6921.png', 'Renault Clio', 'Hatchback', 'Otomatik', 'Benzin', 179, 1199, 4.99, 750, 2015, 21, 1), new Vehicle('https://s3.eu-west-1.amazonaws.com/files.driveyoyo.com/yoyoircom/media/files/23000/95/2023/8/20230811175832083-67659-19-4293.png', 'Volkswagen Polo', 'Hatchback', 'Otomatik', 'Benzin', 219.0, 1499.0, 4.99, 750, 2015, 21, 1), new Vehicle('https://s3.eu-west-1.amazonaws.com/files.driveyoyo.com/yoyoircom/media/files/23000/68/2023/7/20230719120005116-46386-18-626.png', 'Fiat Egea Cross', 'Hatchback', 'Otomatik', 'Dizel', 219.0, 1499.0, 4.79, 900, 2015, 22, 3), new Vehicle('https://s3.eu-west-1.amazonaws.com/files.driveyoyo.com/yoyoircom/media/files/23000/90/2023/7/20230719120732278-51616-13-5210.jpg', 'Ford Kuga', 'Hatchback', 'Otomatik', 'Benzin', 359.0, 2399.0, 5.49, 3000, 2015, 25, 5)]

export const getVehicles = filters => {
	let vehicles = [...mockVehicles]

	for (let [key, val] of Object.entries(filters)) {
		if (filterByStringKeys.includes(key)) {
			vehicles = vehicles.filter(v => v[key] === val)
		} else if (filterByNumberKeys.includes(key)) {
			vehicles = vehicles.filter(v => v[key] >= val)
		} else if (sortKeys.includes(key)) {
			if (val == 'asc') {
				vehicles.sort((a, b) => a[key] - b[key])
			} else {
				vehicles.sort((a, b) => b[key] - a[key])
			}
		}
	}

	return vehicles
}

export const brands = ['Renault Clio', 'Volkswagen Polo', 'Fiat Egea Cross', 'Ford Kuga']
export const types = ['Sedan', 'Hatchback']
export const fuels = ['Benzin', 'Dizel']
export const gear = ['Otomatik', 'Manuel']
export const year = [1, 2, 3, 4, 5]

export default mockVehicles
