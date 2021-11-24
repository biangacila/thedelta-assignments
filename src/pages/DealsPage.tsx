import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Header from "../components/Layout/Header";
import "../styles/page.css";
import "../styles/deals.css";
import PageTitle from "../components/Common/PageTitle";
import SearchBar from "../components/Common/SearchBar";
import SelectionBoxFilter from "../components/Common/SelectionBoxFilter";
import {OptionsProps} from "../types/PageProps";
import {DealsRecord, StoresRecord} from "../types/Models";
import DealCard from "../components/Deals/DealCard";
import {useEffect, useState} from "react";
import {FetchDeals, FetchStores} from "../api/fetching-data";
import {filterOnSale, getDealFilter} from "../seervices/service-deals";
import {initialDeal, initialStore} from "../constants/initialize-models";
import DealDetail from "../components/Deals/DealDetail";

const Tab1: React.FC = () => {

    const [DataDeals, setDataDeals] = useState<DealsRecord[]>([]);
    const [DataStores, setDataStores] = useState<StoresRecord[]>([])
    const [searchText, setSearchText] = useState("");
    const [inputFilter, setInputFilter] = useState("");
    const [showDetail, setShowDetail] = useState(false);
    const [selectedDetail, setSelectedDetail] = useState<DealsRecord>(initialDeal);
    const [selectedStore, setSelectedStore] = useState<StoresRecord>(initialStore);
    const [selectedOtherDealsGame, setSelectedOtherDealsGame] = useState<DealsRecord[]>([]);

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
    const onChangeSelect = (e: any) => {
        let value = e.target.value;
        setInputFilter(value);
        console.log("onChangeSelect > ", value);
    }
    const getStore = (storeId: string): StoresRecord => {
        let record: StoresRecord = initialStore;
        console.log("getStore: ", DataStores)
        for (let i in DataStores) {
            let row = DataStores[i];
            if (row.storeID === storeId) {
                record = row;
            }
        }
        return record
    }

    const getDealList = (): DealsRecord[] => {
        let records: DealsRecord[] = [];
        for (let i in DataDeals) {
            let row = DataDeals[i];
            if (!filterOnSale(row, inputFilter)) {
                continue
            }
            let data = row.title.toLocaleLowerCase();
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
    const getOtherDealForThisGame = (gameID: string): DealsRecord[] => {
        let data: DealsRecord[] = [];
        for (let i in DataDeals) {
            let row = DataDeals[i];
            if (row.gameID === gameID) {
                data.push(row)
            }
        }
        return data
    }
    const onViewMore = (record: DealsRecord) => {
        let storeInfo = getStore(record.storeID);
        let others = getOtherDealForThisGame(record.gameID)
        setSelectedDetail(record);
        setSelectedStore(storeInfo);
        setSelectedOtherDealsGame(others);
        setShowDetail(true);
    }
    const goBack = () => {
        setSelectedDetail(initialDeal);
        setSelectedStore(initialStore);
        setSelectedOtherDealsGame([]);
        setShowDetail(false);
    }

    if(DataDeals.length===0){

    }
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className={"page"}>
                    <Header/>
                    {!showDetail ? <>
                            <PageTitle Title={"Deals"}/>
                            <SearchBar onChange={onChangeSearchInput} inputSearchPlaceholder={"Search deals by name"}/>
                            <SelectionBoxFilter options={getDealFilter()} placeholder={"Filters"}
                                                onChange={onChangeSelect}/>

                            {DataDeals.length===0?
                            <p className={"fetchingData"}>Please wait while fetching data...</p>:null}
                            {getDealList().map(record => {
                                return (
                                    <DealCard onViewMore={onViewMore} Record={record} getStore={getStore}/>
                                )
                            })}
                        </> :
                        <DealDetail Record={selectedDetail} OtherDeals={selectedOtherDealsGame} Store={selectedStore}
                                    goBack={goBack} getStore={getStore} onViewMore={onViewMore}/>
                    }

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
