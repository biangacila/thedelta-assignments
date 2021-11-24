import {IonContent,  IonPage} from '@ionic/react';
import Header from "../components/Layout/Header";
import "../styles/page.css";
import "../styles/stores.css";
import PageTitle from "../components/Common/PageTitle";
import SearchBar from "../components/Common/SearchBar";
import {DealsRecord, StoresRecord} from "../types/Models";
import {useEffect, useState} from "react";
import {FetchDeals, FetchStores} from "../api/fetching-data";
import { initialStore} from "../constants/initialize-models";
import StoreCard from "../components/Stores/StoreCard";

const StoresPage: React.FC = () => {
    const [searchText, setSearchText] = useState("");
    const [selectedStore, setSelectedStore] = useState<StoresRecord>(initialStore);
    const [DataStores, setDataStores] = useState<StoresRecord[]>([]);
    const [DataDeals, setDataDeals] = useState<DealsRecord[]>([]);

    useEffect(() => {
        FetchDeals().then(data => {
            setDataDeals(data)
        })
        FetchStores().then(data => {
            setDataStores(data)
        })
    }, [])
    const onChangeSearchInput = (e: any) => {
        let value = e.target.value;
        setSearchText(value);
    }
    const onViewMore=(record:StoresRecord)=>{
        alert("navigate to more information about the deal: "+record.storeName)
    }
    const getNumberOfDeals=(record:StoresRecord):number=>{
        let num:number=0;
        for(let i in DataDeals){
            let row = DataDeals[i];
            if(row.storeID===record.storeID){
                num++
            }
        }
        return num
    }
    const getStoreList=():StoresRecord[]=>{
        let records: StoresRecord[] = [];
        for (let i in DataStores) {
            let row = DataStores[i];
            let data = row.storeName.toLocaleLowerCase();
            let key = searchText.toLocaleLowerCase();
            if (searchText === "") {
                records.push(row)
            } else {
                if (data.indexOf(key) > -1) {
                    records.push(row)
                }
            }
        }
        return records
    }
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className={"page"}>
                    <Header/>
                    <PageTitle Title={"Stores"}/>
                    <SearchBar onChange={onChangeSearchInput} inputSearchPlaceholder={"Search stores by name"}/>

                    {getStoreList().map(record=>{
                        return(
                            <StoreCard onViewMore={onViewMore} Record={record} getNumberOfDeals={getNumberOfDeals} />
                        )
                    })}
                </div>
            </IonContent>
        </IonPage>

    )

}

export default StoresPage;