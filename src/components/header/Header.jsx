import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react'

const Header = () => {
	return (
		<IonHeader translucent={true}>
			<IonToolbar
				color={'white'}
				style={{
					color: 'rgb(31, 148, 214)'
				}}
			>
				<IonTitle>YOYO</IonTitle>
				<IonButtons slot="start">
					<IonMenuButton></IonMenuButton>
				</IonButtons>
			</IonToolbar>
		</IonHeader>
	)
}

export default Header
