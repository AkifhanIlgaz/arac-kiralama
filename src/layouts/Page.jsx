import { IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useHistory } from 'react-router'
import Header from '../components/header/Header'

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
						<IonMenuToggle autoHide={true}>
							<MenuItem text={'ARAÇLAR VE FİYATLAR'} href={'/home'}></MenuItem>
							<MenuItem text={'LOKASYONLAR'} href={'/locations'}></MenuItem>
							<MenuItem text={'PROFİL'} href={'#'}></MenuItem>
							<MenuItem text={'ÇIKIŞ YAP'} href={'#'}></MenuItem>
						</IonMenuToggle>
					</IonList>
				</IonContent>
			</IonMenu>

			<IonPage id="main-content">
				<Header />
				{children}
			</IonPage>
		</>
	)
}

export default Page
