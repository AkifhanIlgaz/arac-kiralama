import { IonButton, IonCol, IonIcon, IonRow } from '@ionic/react'
import { logoFacebook, logoInstagram, logoLinkedin, logoTwitter, logoYoutube } from 'ionicons/icons'

const SocialFooter = () => {
	return (
		<IonRow>
			<IonCol
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					paddingTop: '0'
				}}
			>
				<IonButton size="small" color={'transparent'}>
					<IonIcon icon={logoFacebook} color="dark"></IonIcon>
				</IonButton>
				<IonButton size="small" color={'transparent'}>
					<IonIcon icon={logoInstagram} color="dark"></IonIcon>
				</IonButton>
				<IonButton size="small" color={'transparent'}>
					<IonIcon icon={logoLinkedin} color="dark"></IonIcon>
				</IonButton>
				<IonButton size="small" color={'transparent'}>
					<IonIcon icon={logoYoutube} color="dark"></IonIcon>
				</IonButton>
				<IonButton size="small" color={'transparent'} href="google.com">
					<IonIcon icon={logoTwitter} color="dark"></IonIcon>
				</IonButton>
			</IonCol>
		</IonRow>
	)
}

export default SocialFooter
