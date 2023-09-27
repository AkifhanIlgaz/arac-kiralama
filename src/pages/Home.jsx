import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonItem, IonList, IonModal, IonPage, IonSelect, IonSelectOption, IonToolbar } from '@ionic/react'
import { filterOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import mockVehicles, { getVehicles, year } from '../api/vehicles'
import VehicleCard from '../components/vehicle/VehicleCard'

const Home = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const [vehicles, setVehicles] = useState([])
	const [filters, setFilters] = useState({})

	useEffect(() => {
		getVehicles(filters)
	}, [])

	useEffect(() => {
		getVehicles(filters)
	}, [filters])

	return (
		<IonPage>
			<IonContent>
				<IonGrid className="ion-align-items-center ion-justify-content-center ion-height">
					{mockVehicles.map((vehicle, i) => (
						<VehicleCard key={i} vehicle={vehicle} />
					))}
				</IonGrid>

				<IonFab slot="fixed" vertical="bottom" horizontal="end">
					<IonFabButton color={'fab'} onClick={() => setIsFilterOpen(true)}>
						<IonIcon icon={filterOutline} color="medium"></IonIcon>
					</IonFabButton>
				</IonFab>

				<IonModal isOpen={isFilterOpen}>
					<IonHeader>
						<IonToolbar>
							<IonButtons slot="start">
								<IonButton onClick={() => setIsFilterOpen(false)}>İptal</IonButton>
							</IonButtons>
							<IonButtons slot="end">
								<IonButton onClick={() => setIsFilterOpen(false)}>Filtrele</IonButton>
							</IonButtons>
						</IonToolbar>
					</IonHeader>
					<IonContent scrollY={false}>
						<IonList lines="full">
							<IonItem>
								<IonSelect
									label="Yakıt"
									labelPlacement="fixed"
									onIonChange={e => {
										setFilters({ ...filters, fuel: e.detail.value })
									}}
								>
									<IonSelectOption value={'Benzin'}>Benzin</IonSelectOption>
									<IonSelectOption value={'Dizel'}>Dizel</IonSelectOption>
								</IonSelect>
							</IonItem>
							<IonItem>
								<IonSelect
									label="Vites"
									labelPlacement="fixed"
									onIonChange={e => {
										setFilters({ ...filters, gear: e.detail.value })
									}}
								>
									<IonSelectOption value={'Otomatik'}>Otomatik</IonSelectOption>
									<IonSelectOption value={'Manuel'}>Manuel</IonSelectOption>
								</IonSelect>
							</IonItem>
							<IonItem>
								<IonSelect
									label="Yaş"
									labelPlacement="fixed"
									onIonChange={e => {
										setFilters({ ...filters, minAge: e.detail.value })
									}}
								>
									{year.map((age, i) => (
										<IonSelectOption key={i} value={age}>
											{age}
										</IonSelectOption>
									))}
								</IonSelect>
							</IonItem>

							<IonItem>
								<IonSelect
									label="Ehliyet Yaşı"
									labelPlacement="fixed"
									onIonChange={e => {
										setFilters({ ...filters, minLicense: e.detail.value })
									}}
								>
									{year.map((age, i) => (
										<IonSelectOption key={i} value={age}>
											{age}
										</IonSelectOption>
									))}
								</IonSelect>
							</IonItem>

							<IonItem>
								<IonSelect
									label="Saatlik"
									onIonChange={e => {
										setFilters({ ...filters, hourPrice: e.detail.value })
									}}
								>
									<IonSelectOption value={'asc'}>Artan Fiyat</IonSelectOption>
									<IonSelectOption value={'desc'}>Azalan Fiyat</IonSelectOption>
								</IonSelect>
							</IonItem>
							<IonItem>
								<IonSelect
									label="Günlük"
									onIonChange={e => {
										setFilters({ ...filters, dayPrice: e.detail.value })
									}}
								>
									<IonSelectOption value={'asc'}>Artan Fiyat</IonSelectOption>
									<IonSelectOption value={'desc'}>Azalan Fiyat</IonSelectOption>
								</IonSelect>
							</IonItem>
							<IonItem>
								<IonSelect
									label="Kilometre Başı"
									onIonChange={e => {
										setFilters({ ...filters, kmPrice: e.detail.value })
									}}
								>
									<IonSelectOption value={'asc'}>Artan Fiyat</IonSelectOption>
									<IonSelectOption value={'desc'}>Azalan Fiyat</IonSelectOption>
								</IonSelect>
							</IonItem>
						</IonList>
					</IonContent>
				</IonModal>
			</IonContent>
		</IonPage>
	)
}

export default Home
