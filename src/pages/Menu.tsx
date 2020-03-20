import React from 'react'
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonAvatar, IonRippleEffect } from '@ionic/react'
import { home, person, book } from 'ionicons/icons'



const MenuPage: React.FC = () => {
  
    return(
        <IonMenu type="overlay" contentId="main">
            <IonHeader>
                <IonToolbar color="tertiary">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                <IonItem button routerLink="/home">
                        <IonIcon icon={home}/>
                        <IonLabel>Home</IonLabel>
                    </IonItem>
                    <IonItem button routerLink="/tabs/authors">
                        <IonIcon icon={person}/>
                        <IonLabel>Autores</IonLabel>
                    </IonItem>
                    <IonItem button routerLink="/tabs/books">
                        <IonIcon icon={book}/>
                        <IonLabel>Livros</IonLabel>
                    </IonItem>                    
                </IonList>
            </IonContent>
        </IonMenu>

    )
}
export default MenuPage