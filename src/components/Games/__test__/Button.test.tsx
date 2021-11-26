
import React from "react";
import ReactDOM from "react-dom";
import GameButton from "../Button";
import {render,cleanup} from "@testing-library/react";
import  "@testing-library/jest-dom/extend-expect";
// @ts-ignore
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<GameButton label={"Click me please"}/>,div)
})

it("renders button correctly",()=>{
   const {getByTestId} = render(<GameButton label={"Click me please"}/>)
    expect(getByTestId("button")).toHaveTextContent("Click me please")
})
it("matches snapshot",()=>{
    const tree =renderer.create(<GameButton label={"Save"}/>).toJSON();
    expect(tree).toMatchSnapshot();
})