import { IonContent, IonGrid, IonPage } from '@ionic/react'
import vehicles from '../api/vehicles'
import VehicleCard from '../components/vehicle/VehicleCard'

const Home = () => {
	return (
		<IonPage>
			<IonContent>
				<IonGrid className="ion-align-items-center ion-justify-content-center ion-height">
					<VehicleCard vehicle={vehicles[0]} />
					{/* {vehicles.map((vehicle, i) => (
						<VehicleCard key={i} vehicle={vehicle} />
					))} */}
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Home
