import { default as _ } from 'lodash';
// import  Model from '../Model/Index';

const DEFAULT_PROJECTION:object = { _v: 0 };
export let findByQuery = async (modelName:string, isFindOne = false, query = {}, projection = DEFAULT_PROJECTION, limit = 0, offset = false) => {
    if (!_.isObject(query)) {
        return Promise.reject(new Error('Query must be object'));
    }
    
    if (!_.isObject(projection)) {
        projection = {};
    }

    if (isFindOne === true) {
        console.log(modelName ,
            
            
            );
        
        // return Model[modelName].findOne(query, projection).exec();
    }
    // if (_.isNumber(offset) && limit) {
    //     return DataBaseCollection.find(query, projection).skip(offset).limit(limit).exec();
    // } else if (limit) {
    //     return DataBaseCollection.find(query, projection).limit(limit).exec();
    // }
    // return DataBaseCollection.find(query, projection).exec();
}