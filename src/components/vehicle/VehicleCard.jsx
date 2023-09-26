import { IonCard, IonCardHeader, IonCol, IonRow } from '@ionic/react'
import Vehicle from '../../api/vehicle'
import RentConditions from './RentConditions'
import VehicleInfo from './VehicleInfo'

/**
 *
 * @param {{vehicle: Vehicle}} props
 * @returns
 */
const VehicleCard = ({ vehicle }) => {
	return (
		<IonRow className="ion-align-items-center ion-justify-content-center ">
			<IonCol>
				<IonCard className="ion-text-start ">
					{/* Araç ismi */}
					<IonCardHeader className="vehicle-brand">{vehicle.brand}</IonCardHeader>

					{/* Araç Resmi */}
					<img src={vehicle.img} alt="" />

					{/* Araç Özellikleri */}
					<VehicleInfo fuel={vehicle.fuel} gear={vehicle.gear} />

					{/* Kiralama Koşulları */}
					<RentConditions minAge={vehicle.minAge} minLicense={vehicle.minLicense} />
				</IonCard>
			</IonCol>
		</IonRow>
	)
}

export default VehicleCard
