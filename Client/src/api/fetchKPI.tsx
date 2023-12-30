import axios from "axios";
import { GetKpisResponse } from "./types";


const fetchKPI = async () => {
    
    const response=await axios.get<Array<GetKpisResponse>>("http://localhost:1337/kpi/kpis")
    // Process the response data
    //console.log(typeof(response.data))
    return response.data
    
    };



export default fetchKPI;