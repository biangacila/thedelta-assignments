import React from "react";
import { SelectionBoxFilterProps} from "../../types/PageProps";
import '../../styles/header.css';

const SelectionBoxFilter: (props: SelectionBoxFilterProps) => JSX.Element=(props:SelectionBoxFilterProps)=>{
    return(
        <div className={"selectionFilterBox"}>
            <select className={"selectionFilterInput"} placeholder={props.placeholder} onChange={props.onChange}>
                <option value={""}>{props.placeholder}</option>
                {props.options.map((row,index)=>{
                    return (
                        <option key={`filter_${index}`} value={row.Key}>{row.Display}</option>
                    )
                })}
            </select>
        </div>
    )
}
export default SelectionBoxFilter;