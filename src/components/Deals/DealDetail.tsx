import React, {useState} from "react";
import {DealDetailProps} from "../../types/PageProps";
import {StoresRecord} from "../../types/Models";
import {initialStore} from "../../constants/initialize-models";
import { IonIcon } from "@ionic/react";
import {square,backspace,chevronBackOutline} from "ionicons/icons";
import DealCard from "./DealCard";

const DealDetail: (props: DealDetailProps) => JSX.Element = (props: DealDetailProps) => {
    const [store, setStore] = useState<StoresRecord>(initialStore);
    let normalPrice = parseFloat(props.Record.normalPrice);
    let salePrice = parseFloat(props.Record.salePrice);
    let savingAmount = normalPrice - salePrice;
    let normalPriceClassname = salePrice > 0 ? "dealPriceAmountActual" : "dealPriceAmountActualWithNoneLine";

    const getSavingInfo = () => {
        if (salePrice > 0) {
            return <p className={"dealPriceAmountSavings"}>You save ${savingAmount.toFixed(2)}</p>
        }
        return null
    }
    return (
        <div className={"dealCardBox"}>
            <div className={"backBox"}>
                <IonIcon icon={chevronBackOutline} onClick={props.goBack} className={"backIcon"}/>
                <span className={"backText"}>Deal Detail</span>
            </div>
            <div className={"dealerTitle"}>{props.Record.title}</div>
            <div className={"dealPriceBox"}>
                <span className={normalPriceClassname}>${normalPrice.toFixed(2)}</span>
                {salePrice > 0 ? <span className={"dealPriceAmountPromotion"}>${salePrice.toFixed(2)}</span> : null}
                <br/>
                {getSavingInfo()}

            </div>

            <div className={"dealCardRectangle"}>
                <span className={"dealCardRectangleLabel"}>Available at {store.storeName}</span>
            </div>
            <div className={"cardImageBox"}>
                <img className={"cardImage"} src={props.Record.thumb}/>
            </div>

            <div className={"cardOtherDealsGame"}>
                <span className={"cardOtherDealsGameLabel"}>Other deals for this game</span>
            </div>
            {props.OtherDeals.map(record => {
                return (
                    <DealCard onViewMore={props.onViewMore} Record={record} getStore={props.getStore}/>
                )
            })}
        </div>
    )
}

export default DealDetail;