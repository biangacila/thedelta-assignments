import React from "react";
import "./Button.css"
type ButtonProps={
    label:string,
}
const GameButton =(props:ButtonProps)=>{

    return <div data-testid={"button"} className={"button-style"}>Hi {props.label}</div>
}

export default GameButton