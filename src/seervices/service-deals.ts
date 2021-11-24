import {DealsRecord} from "../types/Models";
import {OptionsProps} from "../types/PageProps";


export const filterOnSale=(record:DealsRecord,inputFilter:string):boolean=>{
    if(inputFilter!=="inSale"){return true}
    return record.isOnSale === "1";
}

export  const getDealFilter=():OptionsProps[]=>{
    return [
        {Key:"inSale",Display:"In Sale"},
    ]
}