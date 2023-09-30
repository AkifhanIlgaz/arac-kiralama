import { IonContent } from '@ionic/react'
import locations from '../api/locations'
import LocationCard from '../components/location/LocationCard'
import LocationCardSkeleton from '../components/location/LocationCardSkeleton'
import Page from '../layouts/Page'

const Locations = () => {
	return (
		<Page>
			<IonContent className="ion-text-center">
				<h1>Lokasyonlar</h1>
				{Array.from(locations.entries()).map(([index, loc]) => (
					<LocationCard index={index} loc={loc} />
				))}
				<LocationCardSkeleton />
			</IonContent>
		</Page>
	)
}

export default Locations
