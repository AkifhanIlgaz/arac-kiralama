import { IonContent, IonGrid, IonSpinner } from '@ionic/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getLocation } from '../api/locations'
import Page from '../layouts/Page'

const Location = () => {
	const { id } = useParams()

	const [loc, setLoc] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			setLoc(await getLocation(id))
		}

		fetchData()
	}, [])

	return (
		<Page>
			<IonContent>
				{loc ? (
					<IonSpinner />
				) : (
					<IonGrid clas>
						<h1></h1>
					</IonGrid>
				)}
			</IonContent>
		</Page>
	)
}

export default Location
