import { IonCol, IonRow } from '@ionic/react'

const PriceRow = ({ title, price }) => {
	return (
		<IonRow className="ion-align-items-space-around ion-justify-content-center row">
			<IonCol push=".5" size="5">
				{title}
			</IonCol>
			<IonCol></IonCol>
			<IonCol>
				<strong
					style={{
						fontSize: '14px',
						fontWeight: '400',
						lineHeight: '1.5',
						color: '#212529'
					}}
				>
					{price}
				</strong>
			</IonCol>
		</IonRow>
	)
}

export default PriceRow
