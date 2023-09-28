import { IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useHistory } from 'react-router'

const MenuItem = ({ text, href }) => {
	const history = useHistory()

	return (
		<IonItem
			onClick={e => {
				e.preventDefault()
				history.push(href)
			}}
			style={{
				color: '#1f94d6'
			}}
		>
			{text}
		</IonItem>
	)
}

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
						<IonMenuToggle autoHide>
							<MenuItem text={'ARAÇLAR VE FİYATLAR'} href={'/home'}></MenuItem>
							<MenuItem text={'LOKASYONLAR'} href={'/locations'}></MenuItem>
							<MenuItem text={'PROFİL'} href={'#'}></MenuItem>
							<MenuItem text={'ÇIKIŞ YAP'} href={'#'}></MenuItem>
						</IonMenuToggle>
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
