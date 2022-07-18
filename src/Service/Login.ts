import * as CommonService from '../Service/CommonService'
import { default as _ } from 'lodash';
import  MODEL_NAME  from '../Model/UserModel';

export let login = async (number:number, password:string) => {
    let query = {
        number,
        password
    };
    try {
        return await CommonService.findByQuery(MODEL_NAME.name, true, query);
    } catch (error) {
        console.error(error);
        return null;
    }
}

export let getSecureAgent = (agent:any) => {
    const retAgent = {};
    const notAllowed = ['password'];
    console.log(agent ,"ded");
    
    // if(_.isObject(agent) && _.isObject(agent._doc)) {
    //   Object.keys(agent._doc).map((key) => {
    //       if(notAllowed.indexOf(key) < 0) {
    //           retAgent[key] = agent._doc[key];
    //       }
    //   });
    // }
    return retAgent;
}