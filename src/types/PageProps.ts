import {DealsRecord} from "./Models";

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
    Record:DealsRecord
}
