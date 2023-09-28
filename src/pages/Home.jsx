import { IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonPage } from '@ionic/react'
import { filterOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { getVehicles } from '../api/vehicles'
import Filter from '../components/filter/Filter'
import CopyRight from '../components/footer/CopyRight'
import SocialFooter from '../components/footer/SocialFooter'
import VehicleCard from '../components/vehicle/VehicleCard'

const Home = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const [vehicles, setVehicles] = useState([])

	useEffect(() => {
		setVehicles(getVehicles({}))
	}, [])

	return (
		<IonPage>
			<IonContent>
				<IonGrid className="ion-align-items-center ion-justify-content-center ion-height">
					{vehicles && vehicles.map((vehicle, i) => <VehicleCard key={i} vehicle={vehicle} />)}
					<SocialFooter />
					<CopyRight />
				</IonGrid>

				<IonFab slot="fixed" vertical="bottom" horizontal="end">
					<IonFabButton color={'fab'} onClick={() => setIsFilterOpen(true)} size="small">
						<IonIcon icon={filterOutline} color="medium" size="small"></IonIcon>
					</IonFabButton>
				</IonFab>

				<Filter isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} setVehicles={setVehicles} />
			</IonContent>
		</IonPage>
	)
}

export default Home
