import {DealsRecord, StoresRecord} from "./Models";

export type OptionsProps={
    Key:string,
    Display:string,
}
export type HeaderProps={
}
export type PageTitleProps={
    Title:string
}
export type SearchBarProps={
    onChange:any,
    inputSearchPlaceholder:string,
}
export type SelectionBoxFilterProps={
    onChange:any,
    placeholder:string,
    options:OptionsProps[],
}

export type DealCardProps={
    onViewMore:any,
    Record:DealsRecord,
    getStore:any,
}
export type DealDetailProps={
    Record:DealsRecord,
    OtherDeals:DealsRecord[],
    Store:StoresRecord,
    goBack:any,
    onViewMore:any,
    getStore:any,
}
