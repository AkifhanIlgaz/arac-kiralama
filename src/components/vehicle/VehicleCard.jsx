import { IonCard, IonCardHeader, IonCol, IonRow } from '@ionic/react'
import Vehicle from '../../api/vehicle'
import PriceInfo from '../price/PriceInfo'
import RentConditions from './RentConditions'
import VehicleDetail from './VehicleDetail'
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
				<IonCard>
					{/* Araç ismi */}
					<IonCardHeader className="vehicle-brand">{vehicle.brand}</IonCardHeader>

					{/* Araç Resmi */}
					<img src={vehicle.img} alt="" />

					{/* Araç Özellikleri */}
					<VehicleInfo fuel={vehicle.fuel} gear={vehicle.gear} />

					{/* Kiralama Koşulları */}
					<RentConditions minAge={vehicle.minAge} minLicense={vehicle.minLicense} />

					{/* Fiyatlar */}
					<PriceInfo hourPrice={vehicle.hourPrice} dayPrice={vehicle.dayPrice} kmPrice={vehicle.kmPrice} />

					{/* Araç Detay */}
					<VehicleDetail />
				</IonCard>
			</IonCol>
		</IonRow>
	)
}

export default VehicleCard
