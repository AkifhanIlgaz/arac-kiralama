import { IonItem, IonSelect, IonSelectOption } from '@ionic/react'
import { sortOptions } from '../../api/vehicles'

const FilterSelectSort = ({ filters, setFilters, label, objKey }) => {
	return (
		<IonItem>
			<IonSelect
				label={label}
				labelPlacement="fixed"
				onIonChange={e => {
					const newFilter = { ...filters }
					newFilter[objKey] = e.detail.value
					setFilters(newFilter)
				}}
			>
				{sortOptions.map((opt, i) => {
					return (
						<IonSelectOption key={i} value={opt}>
							{opt === 'asc' ? 'Artan Fiyat' : 'Azalan Fiyat'}
						</IonSelectOption>
					)
				})}
			</IonSelect>
		</IonItem>
	)
}

export default FilterSelectSort
