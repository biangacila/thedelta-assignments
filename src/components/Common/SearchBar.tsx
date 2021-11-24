import React from "react";
import {PageTitleProps, SearchBarProps} from "../../types/PageProps";
import '../../styles/header.css';
import { IonIcon } from "@ionic/react";
import {search} from "ionicons/icons";

const SearchBar: (props: SearchBarProps) => JSX.Element=(props:SearchBarProps)=>{
    return(
        <div className={"searchBarContainer"}>
            <input className={"searchBarInput"} placeholder={props.inputSearchPlaceholder} onChange={props.onChange} />
            <IonIcon icon={search} className={"searchBarIcon"}/>
        </div>
    )
}
export default SearchBar;