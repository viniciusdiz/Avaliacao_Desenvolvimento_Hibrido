import React from 'react'
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonTitle, IonIcon } from '@ionic/react'
import { Route, Redirect } from 'react-router'
import Home from './Home'
import { home, person, book } from 'ionicons/icons'
import ListAuthors from './Autores'
import ListBooks from './Livros'

const TabsPage: React.FC = () => {
    return(
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/tabs/authors" component={ListAuthors}/>
                <Route path="/tabs/books" component={ListBooks}/>
                <Route path="/tabs/home" componet={Home}/>
                <Route path="/tabs" render={() => <Redirect to ="/tabs/home"/>}/>
            </IonRouterOutlet>
            <IonTabBar slot="bottom" color="tertiary">
                <IonTabButton href="/home">
                    <IonTitle></IonTitle>
                    <IonIcon icon={home}/>
                </IonTabButton>
                <IonTabButton href="/authors">
                    <IonTitle></IonTitle>
                    <IonIcon icon={person}/>
                </IonTabButton>
                <IonTabButton href="/books">
                    <IonTitle></IonTitle>
                    <IonIcon icon={book}/>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}
export default TabsPage