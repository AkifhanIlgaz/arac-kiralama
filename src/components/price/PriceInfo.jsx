import PriceRow from './PriceRow'

const numOfDigits = num => {
	let digits = 0
	while (num > 0) {
		num = Math.round(num / 10)
		digits++
	}
	return digits
}

const PriceInfo = ({ hourPrice, dayPrice, kmPrice }) => {
	const x = 6.0
	console.log(dayPrice.toPrecision(numOfDigits(dayPrice) + 2))
	return (
		<>
			<PriceRow title={'Saatlik'} price={`${hourPrice.toLocaleString('tr-TR')} ₺`} />
			<PriceRow title={'Günlük'} price={`${dayPrice.toLocaleString('tr-TR')} ₺`} />
			<PriceRow title={'Kullanım'} price={`${kmPrice.toLocaleString('tr-TR')} ₺/Km`} />
		</>
	)
}

export default PriceInfo
