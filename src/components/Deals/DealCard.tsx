
import React from "react";
import {DealCardProps} from "../../types/PageProps";
import '../../styles/header.css';

const DealCard: (props: DealCardProps) => JSX.Element=(props:DealCardProps)=>{

    let normalPrice = parseFloat(props.Record.normalPrice);
    let salePrice = parseFloat(props.Record.salePrice);

    return(
        <div className={"dealCardBox"}>
            <div className={"dealerTitle"}>{props.Record.title}</div>
            <div className={"dealPriceBox"}>
                <span className={"dealPriceAmountActual"}>${normalPrice.toFixed(2)}</span>
                {salePrice>0?<span className={"dealPriceAmountPromotion"}>${salePrice.toFixed(2)}</span>:null}
            </div>
            <div className={"dealViewMoreBox"} onClick={()=>props.onViewMore(props.Record)}>
                <span>View More</span>
            </div>
        </div>
    )
}
export default DealCard;