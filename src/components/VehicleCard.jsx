import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonRow } from '@ionic/react'
import Vehicle from '../api/vehicle'

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
					<IonCardHeader className="vehicle-brand">{vehicle.brand}</IonCardHeader>

					<img src={vehicle.img} alt="" />

					{/* Araç Özellikleri */}
					<IonCardContent
						className="ion-no-padding"
						style={{
							fontSize: '14px',
							background: '#f0faff'
						}}
					>
						<IonCardHeader
							style={{
								paddingBottom: '10px'
							}}
						>
							<IonCardSubtitle>
								<h4
									style={{
										fontSize: '13px',
										fontWeight: '700',
										color: '#1f94d6'
									}}
								>
									Araç Özellikleri
								</h4>
							</IonCardSubtitle>
						</IonCardHeader>

						<IonRow
							className="ion-align-items-center ion-justify-content-space-around"
							style={{
								fontSize: '14px'
							}}
						>
							<IonCol
								size="2"
								push=".5"
								style={{
									display: 'flex',
									alignItems: 'center'
								}}
							>
								<img
									src="https://driveyoyo.com/Content/images/yakit.png"
									alt=""
									style={{
										width: '28px',
										border: '2px solid #d5d5d5',
										borderRadius: '10px',
										padding: '5px'
									}}
								/>
							</IonCol>
							<IonCol pull=".2">
								<span>{vehicle.fuel}</span>
							</IonCol>
						</IonRow>
						<IonRow
							className="ion-align-items-center ion-justify-content-space-around"
							style={{
								fontSize: '14px'
							}}
						>
							<IonCol
								size="2"
								push=".5"
								style={{
									display: 'flex',
									alignItems: 'center'
								}}
							>
								<img
									src="https://driveyoyo.com/Content/images/vites.png"
									alt=""
									style={{
										width: '28px',
										border: '2px solid #d5d5d5',
										borderRadius: '10px',
										padding: '5px'
									}}
								/>
							</IonCol>
							<IonCol pull=".2">
								<span>{vehicle.gear}</span>
							</IonCol>
						</IonRow>
					</IonCardContent>

					{/* Kiralama Koşulları */}
					<IonCardContent
						className="ion-no-padding"
						style={{
							fontSize: '14px',
							background: '#f0faff'
						}}
					>
						<IonCardHeader
							style={{
								paddingBottom: '10px'
							}}
						>
							<IonCardSubtitle>
								<h4
									style={{
										fontSize: '13px',
										fontWeight: '700',
										color: '#1f94d6'
									}}
								>
									Kiralama Koşulları
								</h4>
							</IonCardSubtitle>
						</IonCardHeader>

						<IonRow
							className="ion-align-items-center "
							style={{
								fontSize: '14px'
							}}
						>
							<IonCol
								size="2"
								push=".5"
								style={{
									display: 'flex',
									alignItems: 'center'
								}}
							>
								<img
									src="https://driveyoyo.com/Content/images/yas.png"
									alt=""
									style={{
										width: '28px',
										border: '2px solid #d5d5d5',
										borderRadius: '10px',
										padding: '5px'
									}}
								/>
							</IonCol>
							<IonCol pull=".2">
								<span>{`${vehicle.minAge} yaş ve üzeri`}</span>
							</IonCol>
						</IonRow>
						<IonRow
							className="ion-align-items-center ion-justify-content-space-around"
							style={{
								fontSize: '14px'
							}}
						>
							<IonCol
								size="2"
								push=".5"
								style={{
									display: 'flex',
									alignItems: 'center'
								}}
							>
								<img
									src="https://driveyoyo.com/Content/images/ehliyet.png"
									alt=""
									style={{
										width: '28px',
										border: '2px solid #d5d5d5',
										borderRadius: '10px',
										padding: '5px'
									}}
								/>
							</IonCol>
							<IonCol pull=".2">
								<span>{`Ehliyet yaşı ${vehicle.minLicence} ve üzeri`}</span>
							</IonCol>
						</IonRow>
					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow>
	)
}

export default VehicleCard
