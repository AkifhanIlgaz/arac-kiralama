import { IonItem, IonSelect, IonSelectOption } from '@ionic/react'

const FilterSelect = ({ filters, setFilters, label, key, options }) => {
	return (
		<IonItem>
			<IonSelect
				label={label}
				labelPlacement="fixed"
				onIonChange={e => {
					const newFilter = { ...filters }
					newFilter[key] = e.detail.value
					setFilters(newFilter)
				}}
			>
				{options.map((opt, i) => {
					return (
						<IonSelectOption key={i} value={opt}>
							{opt}
						</IonSelectOption>
					)
				})}
			</IonSelect>
		</IonItem>
	)
}

export default FilterSelect
