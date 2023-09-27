import { IonButton, IonCol, IonRow } from '@ionic/react'

const VehicleDetail = () => {
	return (
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
	)
}

export default VehicleDetail
