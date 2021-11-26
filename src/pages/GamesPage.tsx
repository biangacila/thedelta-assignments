import Header from "../components/Layout/Header";
import PageTitle from "../components/Common/PageTitle";
import SearchBar from "../components/Common/SearchBar";
import {IonContent, IonPage } from "@ionic/react";
import '../styles/games.css';
import GameButton from "../components/Games/Button";


const GamesPage: React.FC = () => {

    const onChangeSearchInput=(e:any)=>{

    }
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className={"page"}>
                    <Header/>
                    <PageTitle Title={"Games"}/>
                    <SearchBar onChange={onChangeSearchInput} inputSearchPlaceholder={"Search games by name"}/>
                    <div className={"comingSoonBox"}>
                        <span className={"comingSoonText"}>Coming Soon!</span>
                    </div>

                    <GameButton label={"Click me please"}/>

                </div>
            </IonContent>
        </IonPage>
    )

}

export default GamesPage;