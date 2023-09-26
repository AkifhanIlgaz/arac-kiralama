import { IonContent, IonGrid, IonPage } from '@ionic/react'
import vehicles from '../api/vehicles'
import Vehicle from '../components/Vehicle'

const Home = () => {
	return (
		<IonPage>
			<IonContent>
				<IonGrid className="ion-align-items-center ion-justify-content-center ion-height">
					{vehicles.map((vehicle, i) => (
						<Vehicle key={i} vehicle={vehicle} />
					))}
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Home
