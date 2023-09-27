import { IonButton, IonButtons, IonContent, IonHeader, IonList, IonModal, IonToolbar } from '@ionic/react'
import { useState } from 'react'
import { ages, brands, fuels, gears, getVehicles, licenseAges, types } from '../../api/vehicles'
import FilterSelect from './FilterSelect'
import FilterSelectSort from './FilterSelectSort'

const Filter = ({ isFilterOpen, setIsFilterOpen, setVehicles }) => {
	const [filters, setFilters] = useState({})

	return (
		<IonModal
			isOpen={isFilterOpen}
			onDidDismiss={() => {
				setIsFilterOpen(false)
			}}
		>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton onClick={() => setIsFilterOpen(false)}>İptal</IonButton>
					</IonButtons>
					<IonButtons slot="end">
						<IonButton
							onClick={() => {
								console.log(filters)
								setVehicles(getVehicles(filters))
								setIsFilterOpen(false)
							}}
						>
							Filtrele
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent scrollY={false}>
				<IonList lines="full">
					<FilterSelect filters={filters} setFilters={setFilters} label={'Marka'} objKey={'brand'} options={brands} />

					<FilterSelect filters={filters} setFilters={setFilters} label={'Yakıt'} objKey={'fuel'} options={fuels} />

					<FilterSelect filters={filters} setFilters={setFilters} label={'Tür'} objKey={'type'} options={types} />

					<FilterSelect filters={filters} setFilters={setFilters} label={'Vites'} objKey={'gear'} options={gears} />

					<FilterSelect filters={filters} setFilters={setFilters} label={'Yaş'} objKey={'minAge'} options={ages} />

					<FilterSelect filters={filters} setFilters={setFilters} label={'Ehliyet Yaşı'} objKey={'minLicense'} options={licenseAges} />

					<FilterSelectSort filters={filters} setFilters={setFilters} label={'Saatlik'} objKey={'hourPrice'} />

					<FilterSelectSort filters={filters} setFilters={setFilters} label={'Günlük'} objKey={'dayPrice'} />

					<FilterSelectSort filters={filters} setFilters={setFilters} label={'Kilometre Başı'} objKey={'kmPrice'} />
				</IonList>

				<IonButton
					expand="block"
					className="ion-margin"
					onClick={() => {
						setFilters({})
						setVehicles(getVehicles({}))
						setIsFilterOpen(false)
					}}
				>
					Reset
				</IonButton>
			</IonContent>
		</IonModal>
	)
}

export default Filter
