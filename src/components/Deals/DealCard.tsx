import React, {useState} from "react";
import {DealCardProps} from "../../types/PageProps";
import '../../styles/header.css';
import {StoresRecord} from "../../types/Models";
import {initialStore} from "../../constants/initialize-models";

const DealCard: (props: DealCardProps) => JSX.Element = (props: DealCardProps) => {
    const [showDetail, setShowDetail] = useState(false);
    const [store, setStore] = useState<StoresRecord>(initialStore);
    let normalPrice = parseFloat(props.Record.normalPrice);
    let salePrice = parseFloat(props.Record.salePrice);
    let savingAmount = normalPrice - salePrice;
    let normalPriceClassname = salePrice > 0 ? "dealPriceAmountActual" : "dealPriceAmountActualWithNoneLine";

    const onClickShowDetail = () => {
        //setShowDetail(true);
        props.onViewMore(props.Record);
        /*let storeInfo = props.getStore(props.Record.storeID);
        setStore(storeInfo);*/
    }

    const getSavingInfo = () => {
        if (salePrice > 0) {
            return <p className={"dealPriceAmountSavings"}>You save ${savingAmount.toFixed(2)}</p>
        }
        return null
    }

    return (
        <div className={"dealCardBox"}>
            <div className={"dealerTitle"}>{props.Record.title}</div>
            <div className={"dealPriceBox"}>
                <span className={normalPriceClassname}>${normalPrice.toFixed(2)}</span>
                {salePrice > 0 ? <span className={"dealPriceAmountPromotion"}>${salePrice.toFixed(2)}</span> : null}
                {showDetail ?
                    <>
                        <br/>
                        {getSavingInfo()}
                    </> : null}
            </div>
            {!showDetail ? <div className={"dealViewMoreBox"} onClick={() => onClickShowDetail()}>
                <span>View More</span>
            </div> : null}

            {showDetail ?
                <>
                    <div className={"dealCardRectangle"}>
                        <span className={"dealCardRectangleLabel"}>Available at {store.storeName}</span>
                    </div>
                    <div className={"cardImageBox"}>
                        <img className={"cardImage"} src={props.Record.thumb}/>
                    </div>

                    <div className={"cardOtherDealsGame"}>
                        <span className={"cardOtherDealsGameLabel"}>Other deals for this game</span>
                    </div>
                    <div className={"cardOtherDealsBox"}>

                    </div>

                </> : null}
        </div>
    )
}
export default DealCard;