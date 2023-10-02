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
							{loc.info}
							<a href={loc.map} style={{ textDecoration: 'none' }}>
								<p>{loc.full}</p>
								<IonIcon icon={locationOutline} size="large"></IonIcon>
							</a>
						</div>
					)}
				</IonGrid>
			</IonContent>
		</Page>
	)
}

export default Location
