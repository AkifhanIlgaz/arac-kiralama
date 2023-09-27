import PriceRow from './PriceRow'

const numOfDigits = num => {
	let digits = 0
	while (num > 0) {
		num = Math.round(num / 10)
		digits++
	}
	return digits
}

const PriceInfo = ({ hourPrice, dayPrice, kmPrice, provision }) => {
	return (
		<>
			<PriceRow title={'Saatlik'} price={`${hourPrice.toLocaleString('tr-TR')} ₺`} />
			<PriceRow title={'Günlük'} price={`${dayPrice.toLocaleString('tr-TR')} ₺`} />
			<PriceRow title={'Mesafe Ücreti'} price={`${kmPrice.toLocaleString('tr-TR')} ₺/Km`} />
			<PriceRow title={'Provizyon Bedeli'} price={`${provision.toLocaleString('tr-TR')} ₺`} />
		</>
	)
}

export default PriceInfo
