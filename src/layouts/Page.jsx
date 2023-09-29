import { IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'

const Page = ({ children }) => {
	return (
		<>
			<IonMenu contentId="main-content">
				<IonHeader>
					<IonToolbar>
						<IonTitle>YOYO</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent scrollY={false}>
					<IonList lines="none">
						<IonItem>ARAÇLAR VE FİYATLAR</IonItem>
						<IonItem>LOKASYONLAR</IonItem>
						<IonItem>PROFİL</IonItem>
						<IonItem>ÇIKIŞ YAP</IonItem>
					</IonList>
				</IonContent>
			</IonMenu>

			<IonPage id="main-content">
				<IonHeader translucent={true}>
					<IonToolbar
						color={'white'}
						style={{
							color: 'rgb(31, 148, 214)'
						}}
					>
						<IonTitle>YOYO</IonTitle>
						<IonButtons slot="start">
							<IonMenuButton color={'dark'}></IonMenuButton>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				{children}
			</IonPage>
		</>
	)
}

export default Page
