import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import BookDetails from './pages/BookDetails';
import ListBooks from './pages/Livros';
import ListAuthors from './pages/Autores';
import MenuPage from './pages/Menu';
import TabsPage from './pages/Abas';

const App: React.FC = () => (
  <IonSplitPane contentId="main">
    <MenuPage/>
    <IonPage id="main">
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/book/:bookID" component={BookDetails} exact />
            <Route path="/author" component={ListAuthors} exact />
            <Route path="/author/books/:authorID" component={ListBooks} exact />
            <Route path="/tabs" component={TabsPage} />
            <Route exact path="/" render={() => <Redirect to="/tabs" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </IonPage>
  </IonSplitPane>
);

export default App;
