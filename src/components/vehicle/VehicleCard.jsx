import { IonButton, IonCard, IonCardHeader, IonCol, IonRow } from '@ionic/react'
import Vehicle from '../../api/vehicle'
import PriceInfo from '../price/PriceInfo'
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
				<IonCard className="">
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

					<IonRow className="ion-align-items-center ion-justify-content-center row">
						<IonCol
							style={{
								display: 'block',
								textAlign: 'center'
							}}
						>
							<IonButton
								size="medium"
								expand="block"
								style={{
									minHeight: '2em',
									color: 'black',
									border: 'solid 1px #818181',
									borderRadius: '8px',
									boxShadow: '0px 3px 10px 0px rgb(0 0 0 / 8%)',
									margin: '10px'
								}}
								color={'white'}
							>
								<span className="btn">Araç Detay</span>
							</IonButton>
						</IonCol>
					</IonRow>
				</IonCard>
			</IonCol>
		</IonRow>
	)
}

export default VehicleCard
