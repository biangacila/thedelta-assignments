import {ENDPOINT_FETCH_DEALS} from "../constants/api-endpoints";
import axios from "axios";
import {DealsRecord} from "../types/Models";
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