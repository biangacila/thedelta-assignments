
import React from "react";
import ReactDOM from "react-dom";
import StoreCard from "../StoreCard";
import {render,cleanup} from "@testing-library/react";
import  "@testing-library/jest-dom/extend-expect";
import {StoresRecord} from "../../../types/Models";
// @ts-ignore
import renderer from "react-test-renderer";

const onViewMore=()=>{
    alert("View more detail clicked")
}
const getNumberOfDeals=():number=>{
    return 4
}
const record:StoresRecord={
    "storeID": "1",
    "storeName": "Steam",
    "isActive": 1,
    "images": {
        "banner": "/img/stores/banners/0.png",
        "logo": "/img/stores/logos/0.png",
        "icon": "/img/stores/icons/0.png"
    }
}

afterEach(cleanup);
it("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<StoreCard onViewMore={onViewMore} Record={record} getNumberOfDeals={getNumberOfDeals}/>,div)
})
it("matches snapshot",()=>{
    const tree =renderer.create(<StoreCard onViewMore={onViewMore} Record={record} getNumberOfDeals={getNumberOfDeals}/>).toJSON();
    expect(tree).toMatchSnapshot();
})

