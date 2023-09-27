import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonModal, IonSelect, IonSelectOption, IonToolbar } from '@ionic/react'
import { useState } from 'react'
import { getVehicles, year } from '../../api/vehicles'

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
					<IonItem>
						<IonSelect
							label="Marka"
							labelPlacement="fixed"
							onIonChange={e => {
								setFilters({ ...filters, brand: e.detail.value })
							}}
						>
							<IonSelectOption value={'Renault Clio'}>Renault Clio</IonSelectOption>
							<IonSelectOption value={'Dizel'}>Dizel</IonSelectOption>
						</IonSelect>
					</IonItem>
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
							label="Tür"
							labelPlacement="fixed"
							onIonChange={e => {
								setFilters({ ...filters, type: e.detail.value })
							}}
						>
							<IonSelectOption value={'Sedan'}>Sedan</IonSelectOption>
							<IonSelectOption value={'Hatchback'}>Hatchback</IonSelectOption>
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
