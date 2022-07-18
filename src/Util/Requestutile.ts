import { default as _ } from 'lodash';
import { default as requestPromise } from 'request-promise';
// import { default as logger} from '../Common/Logger';
const defaultOptions = {
    json: true,
    headers: {
        'User-Agent': 'Meter Application'
    },
    resolveWithFullResponse: true
};

const defaultQueryOrBody = {
    ProtocolVersion: 2
}
export let get = async (uri:string, data:Object) => {
    
    if (!_.isObject(data)) {
        throw new Error('Get request [data] must be object');
    }

    let query = Object.assign({}, data, defaultQueryOrBody);

    let getOptions = Object.assign({}, defaultOptions, {
        uri,
        method: 'GET',
        useQuerystring: true,
        qs: query,
        resolveWithFullResponse: false
    });
    
    try {
        let response = await requestPromise(getOptions);
        console.log(response ,"sfj");
        
        return response;
    }catch(error) {
        console.log(error);
        // logger.error(error);
        return null;
    }
}