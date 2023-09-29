import { IonCard, IonCardContent, IonIcon, IonText } from '@ionic/react'
import { locationOutline } from 'ionicons/icons'

const LocationCard = ({ location }) => {
	return (
		<IonCard>
			<IonCardContent
				style={{
					display: 'flex',
					alignItems: 'center'
				}}
			>
				<IonIcon
					icon={locationOutline}
					size="large"
					color="dark"
					style={{
						paddingRight: '.7rem'
					}}
				></IonIcon>
                
				<IonText color={'dark'} style={{ fontWeight: 700 }}>
					{location ? location : 'Avcılar İdo İspark'}
				</IonText>
			</IonCardContent>
		</IonCard>
	)
}

export default LocationCard
