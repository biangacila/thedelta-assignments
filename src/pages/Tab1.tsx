import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Header from "../components/Layout/Header";
import "../styles/page.css"

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="page">
                <Header Title={"CheapShark"}/>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Technical Assignments</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Technical Assignments"/>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
