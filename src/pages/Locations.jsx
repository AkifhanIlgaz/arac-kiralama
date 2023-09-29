import { IonContent } from '@ionic/react'
import LocationCard from '../components/location/LocationCard'
import Page from '../layouts/Page'

const Locations = () => {
	return (
		<Page>
			<IonContent>
				<LocationCard></LocationCard>
				<LocationCard></LocationCard>
				<LocationCard></LocationCard>
			</IonContent>
		</Page>
	)
}

export default Locations
