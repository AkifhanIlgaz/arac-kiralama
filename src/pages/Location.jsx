import { IonContent, IonGrid, IonIcon, IonSpinner } from '@ionic/react'
import { locationOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getLocation } from '../api/locations'
import Page from '../layouts/Page'

const Location = () => {
	const { id } = useParams()

	const [loc, setLoc] = useState()

	useEffect(() => {
		const fetchData = async () => {
			const l = await getLocation(id)
			setLoc(l)
		}

		fetchData()
	}, [])

	return (
		<Page>
			<IonContent>
				<IonGrid className="ion-text-center">
					{loc === undefined ? (
						<IonSpinner />
					) : (
						<div>
							<h1>{loc.title}</h1>
							<p>{loc.info}</p>
							<a href={loc.map}>
								<IonIcon icon={locationOutline} size="large"></IonIcon>
							</a>
							<p>{loc.full}</p>
						</div>
					)}
				</IonGrid>
			</IonContent>
		</Page>
	)
}

export default Location
