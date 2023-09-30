import { IonCard, IonCardContent, IonIcon, IonText } from '@ionic/react'
import { locationOutline } from 'ionicons/icons'
import { useHistory } from 'react-router'

const LocationCard = ({ index, loc }) => {
	const history = useHistory()

	return (
		<IonCard onClick={() => history.push(`/locations/${index}`)}>
			<IonCardContent
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<IonText style={{ fontWeight: 700, color: '#1f94d6' }}>{loc}</IonText>
			</IonCardContent>
		</IonCard>
	)
}

export default LocationCard
