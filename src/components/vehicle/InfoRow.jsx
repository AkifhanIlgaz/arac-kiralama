import { IonCol, IonRow } from '@ionic/react'

const InfoRow = ({ icon, info }) => {
	return (
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
					src={icon}
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
				<span>{info}</span>
			</IonCol>
		</IonRow>
	)
}
export default InfoRow
