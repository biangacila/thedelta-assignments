import React from "react";
import { PageTitleProps} from "../../types/PageProps";
import '../../styles/header.css';

const PageTitle: (props: PageTitleProps) => JSX.Element=(props:PageTitleProps)=>{
    return(
        <div className={"pageTitleContainer"}>
            <span className={"pageTitleLabel"}>{props.Title}</span>
        </div>
    )
}
export default PageTitle;