import { IonCard, IonCardContent, IonSkeletonText } from '@ionic/react'

const LocationCardSkeleton = () => {
	return (
		<IonCard>
			<IonCardContent
				style={{
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<IonSkeletonText animated={true} style={{ width: '75%' }}></IonSkeletonText>
			</IonCardContent>
		</IonCard>
	)
}

export default LocationCardSkeleton
