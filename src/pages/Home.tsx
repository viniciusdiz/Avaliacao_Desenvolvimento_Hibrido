import { IonTabs, IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle } from '@ionic/react';
import React from 'react';
import './Home.css';
import bibliotecas from './images/bibliotecas.png';

const Home: React.FC = () => {
  return (
      <IonPage>
          <IonHeader>
            <IonToolbar color="tertiary">
              <IonButtons slot="start">
                <IonMenuButton/>
              </IonButtons>
              <IonTitle>Library</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonCard>
              {/* <img src={bibliotecas} /> */}
              <IonCardHeader>
                <IonCardSubtitle>Library</IonCardSubtitle>
                <IonCardTitle>Faculdades Integradas de Bauru</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </IonContent>
      </IonPage>
  );
};

export default Home;
