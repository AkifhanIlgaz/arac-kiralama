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
				<IonCard className=" ">
					{/* Araç ismi */}
					<IonCardHeader className="vehicle-brand">{vehicle.brand}</IonCardHeader>

					{/* Araç Resmi */}
					<img src={vehicle.img} alt="" />

					{/* Araç Özellikleri */}
					<VehicleInfo fuel={vehicle.fuel} gear={vehicle.gear} />

					{/* Kiralama Koşulları */}
					<RentConditions minAge={vehicle.minAge} minLicense={vehicle.minLicense} />

					<IonRow className="ion-align-items-space-around ion-justify-content-center row">
						<IonCol push=".5">Saatlik</IonCol>
						<IonCol></IonCol>
						<IonCol>
							<strong
								style={{
									fontSize: '14px',
									fontWeight: '400',
									lineHeight: '1.5',
									color: '#212529'
								}}
							>{`${vehicle.hourPrice.toPrecision(5)} ₺`}</strong>{' '}
						</IonCol>
					</IonRow>
					<IonRow className="ion-align-items-space-around ion-justify-content-center row">
						<IonCol push=".5">Günlük</IonCol>
						<IonCol></IonCol>
						<IonCol>
							<strong
								style={{
									fontSize: '14px',
									fontWeight: '400',
									lineHeight: '1.5',
									color: '#212529'
								}}
							>{`${vehicle.dayPrice.toPrecision(5)} ₺`}</strong>
						</IonCol>
					</IonRow>
					<IonRow className="ion-align-items-space-around ion-justify-content-center">
						<IonCol push=".5">Kullanım</IonCol>
						<IonCol></IonCol>
						<IonCol>
							<strong
								style={{
									fontSize: '14px',
									fontWeight: '400',
									lineHeight: '1.5',
									color: '#212529'
								}}
							>{`${vehicle.hourPrice.toPrecision(5)} ₺/Km`}</strong>
						</IonCol>
					</IonRow>
				</IonCard>
			</IonCol>
		</IonRow>
	)
}

export default VehicleCard
