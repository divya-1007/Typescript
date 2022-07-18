
import * as RequestUtil from '../Util/Requestutile';
import {VENDOR_API} from '../Config/IndexConfig'



export let getCurrentBalance = async (agentUsername:any) => {
    let query = {
      company:agentUsername
    }
  
    return await RequestUtil.get(VENDOR_API.GET_CURRENT_BALANCE ,query);
    /* sample response if api isn't available */
    /* 
    "9943"
    */
  }