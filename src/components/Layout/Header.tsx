import React from "react";
import {HeaderProps} from "../../types/PageProps";
import '../../styles/header.css';

const Header: (props: HeaderProps) => JSX.Element=(props:HeaderProps)=>{
    return(
        <div className={"headerContainer"}>
            <div className={"headerContainerInner"}>
                <img src={"https://www.cheapshark.com/img/twitter_logo.png"} className={"headerIcon"} />
                <span className={"headerTitle"}>{props.Title}</span>
            </div>
        </div>
    )
}
export default Header;