import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Header from "../components/Layout/Header";
import "../styles/page.css";
import "../styles/deals.css";
import PageTitle from "../components/Common/PageTitle";
import SearchBar from "../components/Common/SearchBar";
import SelectionBoxFilter from "../components/Common/SelectionBoxFilter";
import {OptionsProps} from "../types/PageProps";
import {DealsRecord} from "../types/Models";
import DealCard from "../components/Deals/DealCard";
import {useEffect, useState} from "react";
import {FetchDeals} from "../api/fetching-data";

const Tab1: React.FC = () => {

    const [DataDeals,setDataDeals]=useState<DealsRecord[]>([]);
    const [searchText,setSearchText]=useState("");
    const [inputFilter,setInputFilter]=useState("");

    useEffect(()=>{
        FetchDeals().then(data=>{
            setDataDeals(data)
        })
    },[])
    const onChangeSearchInput = (e: any) => {
        let value = e.target.value;
        setSearchText(value);
    }
    const onChangeSelect=(e:any)=>{
        let value = e.target.value;
        setInputFilter(value);
        console.log("onChangeSelect > ",value);
    }
    const getDealFilter=():OptionsProps[]=>{
        return [
            {Key:"inSale",Display:"In Sale"},
        ]
    }
    const filterOnSale=(record:DealsRecord):boolean=>{
        if(inputFilter!=="inSale"){return true}
        return record.isOnSale !== "1";
    }
    const getDealList=():DealsRecord[]=>{
        let records:DealsRecord[]=[];
        for(let i in DataDeals){
            let row = DataDeals[i];
            if(!filterOnSale(row)){continue}
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
    const onViewMore=(record:DealsRecord)=>{
        alert("Click: "+record.title)
    }
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className={"page"}>
                    <Header/>
                    <PageTitle Title={"Deals"}/>
                    <SearchBar onChange={onChangeSearchInput} inputSearchPlaceholder={"Search deals by name"}/>
                    <SelectionBoxFilter options={getDealFilter()} placeholder={"Filters"} onChange={onChangeSelect}/>
                    {getDealList().map(record=>{
                        return(
                            <DealCard onViewMore={onViewMore} Record={record} />
                        )
                    })}

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
