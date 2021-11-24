import {ENDPOINT_FETCH_DEALS, ENDPOINT_FETCH_STORES} from "../constants/api-endpoints";
import axios from "axios";
import {DealsRecord, StoresRecord} from "../types/Models";

export const FetchDeals=async ():Promise<DealsRecord[]>=>{
    let endpoint = ENDPOINT_FETCH_DEALS;
    let results:DealsRecord[]=[]
    await axios(endpoint)
        .then(response=>{
            for(let i in response.data){
                let record:DealsRecord = response.data[i] as DealsRecord;
                results.push(record);
            }
        })
    return results
}

export const FetchStores=async ():Promise<StoresRecord[]>=>{
    let endpoint = ENDPOINT_FETCH_STORES;
    let results:StoresRecord[]=[]
    await axios(endpoint)
        .then(response=>{
            for(let i in response.data){
                let record:StoresRecord = response.data[i] as StoresRecord;
                results.push(record);
            }
        })
    return results
}