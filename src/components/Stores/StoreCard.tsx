import React, {useState} from "react";
import {DealCardProps, StoreCardProps} from "../../types/PageProps";
import '../../styles/header.css';
import {StoresRecord} from "../../types/Models";
import {initialStore} from "../../constants/initialize-models";
import {URL_STORE_IMAGES} from "../../constants/api-endpoints";

const StoreCard: (props: StoreCardProps) => JSX.Element = (props: StoreCardProps) => {

    return(
        <div className={"storeCardContainer"}>
            <div className={"storeCardImageBox"}>
                <img src={`${URL_STORE_IMAGES}${props.Record.images.banner}`}/>
            </div>
            <div className={"storeCardTitleBox"}>
                <img src={`${URL_STORE_IMAGES}${props.Record.images.icon}`}/>
                <span className={"storeCardTitle"}>{props.Record.storeName}</span>
            </div>
            <div className={"storeCardNoDealBox"}>
                <span className={"storeCardNoDealText"}>{props.getNumberOfDeals(props.Record)} deals</span>
            </div>
            <div className={"storeCardViewMoreBox"} onClick={()=>props.onViewMore(props.Record)}>
                <span className={"storeCardViewMoreTex"}>View More</span>
            </div>
        </div>
    )
}

export default StoreCard;