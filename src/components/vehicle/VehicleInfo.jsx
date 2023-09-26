import { IonCardContent } from '@ionic/react'
import icons from '../../images/icons'
import InfoRow from './InfoRow'
import VehicleTitle from './VehicleTitle'

const VehicleInfo = ({ fuel, gear }) => {
	return (
		<IonCardContent
			className="ion-no-padding"
			style={{
				fontSize: '14px',
				background: '#f0faff'
			}}
		>
			<VehicleTitle title={'Araç Özellikleri'} />
			<InfoRow icon={icons.Fuel} info={fuel} />
			<InfoRow icon={icons.Gear} info={gear} />
		</IonCardContent>
	)
}

export default VehicleInfo
