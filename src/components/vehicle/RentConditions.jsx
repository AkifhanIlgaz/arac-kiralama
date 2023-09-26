import { IonCardContent } from '@ionic/react'
import icons from '../../images/icons'
import InfoRow from './InfoRow'
import VehicleTitle from './VehicleTitle'

const RentConditions = ({ minAge, minLicense }) => {
	return (
		<IonCardContent
			className="ion-no-padding"
			style={{
				fontSize: '14px',
				background: '#f0faff'
			}}
		>
			<VehicleTitle title={'Kiralama Koşulları'} />
			<InfoRow icon={icons.Age} info={`${minAge} yaş ve üzeri`} />
			<InfoRow icon={icons.License} info={`Ehliyet yaşı ${minLicense} ve üzeri`} />
		</IonCardContent>
	)
}

export default RentConditions
