import { IonCardHeader, IonCardSubtitle } from '@ionic/react'

const VehicleTitle = ({ title }) => {
	return (
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
					{title}
				</h4>
			</IonCardSubtitle>
		</IonCardHeader>
	)
}

export default VehicleTitle
