import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import DealsPage from './pages/DealsPage';
import StoresPage from "./pages/StoresPage";
import GamesPage from './pages/GamesPage';
import Tab3 from './pages/Tab3';

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

import "./styles/app.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/deals">
            <DealsPage />
          </Route>
          <Route exact path="/games">
            <GamesPage />
          </Route>
          <Route path="/stores">
            <StoresPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className={"bottomContainer"}>
          <IonTabButton tab="tab1" href="/deals">
            {/*<IonIcon icon={triangle} />*/}
            <IonLabel className={"buttonLinkLabel"}>Deals</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/games">
            {/*<IonIcon icon={ellipse} />*/}
            <IonLabel className={"buttonLinkLabel"}>Games</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/stores">
            {/*<IonIcon icon={square} />*/}
            <IonLabel className={"buttonLinkLabel"}>Stores</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
